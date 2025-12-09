import { NextResponse } from "next/server";

type CacheEntry = { ts: number; data: any };
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes
const cache: Record<string, CacheEntry> = {};

const urls = {
  profile: process.env.NEXT_PUBLIC_LEETCODE_PROFILE_URI,
  full: process.env.NEXT_PUBLIC_LEETCODE_FULL_PROFILE_URI,
  badges: process.env.NEXT_PUBLIC_LEETCODE_BADGES_URI,
  contest: process.env.NEXT_PUBLIC_LEETCODE_CONTEST_URI,
  solved: process.env.NEXT_PUBLIC_LEETCODE_SOLVED_URI,
};

async function fetchWithRetry(url: string, attempts = 3, backoff = 500): Promise<any> {
  let lastErr: any;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (res.status === 429) {
        lastErr = new Error("429");
        await new Promise((r) => setTimeout(r, backoff));
        backoff *= 2;
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, backoff));
      backoff *= 2;
    }
  }
  throw lastErr;
}

export async function GET() {
  try {
    if (!urls.profile) return NextResponse.json({ error: "Missing env urls" }, { status: 500 });

    const key = "leetcode_combined_v1";
    const now = Date.now();
    const cached = cache[key];
    if (cached && now - cached.ts < CACHE_TTL) {
      return NextResponse.json({ source: "cache", ...cached.data });
    }

    const [profile, badges, solved, contest] = await Promise.all([
      fetchWithRetry(urls.profile),
      urls.badges ? fetchWithRetry(urls.badges) : Promise.resolve(null),
      urls.solved ? fetchWithRetry(urls.solved) : Promise.resolve(null),
      urls.contest ? fetchWithRetry(urls.contest) : Promise.resolve(null),
    ]);

    const payload = { profile, badges, solved, contest };
    cache[key] = { ts: now, data: payload };
    // console.log("Leetcode data:", payload);

    return NextResponse.json({ source: "network", ...payload });
  } catch (err: any) {
    const is429 = String(err.message || "").includes("429");
    return NextResponse.json(
      { error: "Upstream error", message: err.message || String(err) },
      { status: is429 ? 429 : 500 }
    );
  }
}