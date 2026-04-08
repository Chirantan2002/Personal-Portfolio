import { NextResponse } from "next/server";

type CacheEntry = { ts: number; data: any };

// Deduplicate in-flight requests
let inFlight: Promise<any> | null = null;

const CACHE_TTL = 30 * 60 * 1000; //  30 minutes (Next.js uses seconds)

const urls = {
  profile: process.env.NEXT_PUBLIC_LEETCODE_PROFILE_URI,
  badges: process.env.NEXT_PUBLIC_LEETCODE_BADGES_URI,
  contest: process.env.NEXT_PUBLIC_LEETCODE_CONTEST_URI,
  solved: process.env.NEXT_PUBLIC_LEETCODE_SOLVED_URI,
};

// Better retry logic
async function fetchWithRetry(
  url: string,
  attempts = 3,
  backoff = 2000,
): Promise<any> {
  let lastErr: any;

  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
        next: { revalidate: CACHE_TTL }, // ✅ built-in caching
      });

      if (res.status === 429) {
        const retryAfter = res.headers.get("retry-after");
        const delay = retryAfter ? parseInt(retryAfter) * 1000 : backoff;

        await new Promise((r) => setTimeout(r, delay));
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
  if (!urls.profile) {
    return NextResponse.json({ error: "Missing env urls" }, { status: 500 });
  }

  // ✅ Deduplicate concurrent requests
  if (inFlight) {
    return inFlight;
  }

  inFlight = (async () => {
    try {
      const payload: any = {};

      // ✅ Sequential requests (avoids rate-limit bursts)
      payload.profile = await fetchWithRetry(urls.profile!);

      if (urls.badges) {
        payload.badges = await fetchWithRetry(urls.badges);
      }

      if (urls.solved) {
        payload.solved = await fetchWithRetry(urls.solved);
      }

      if (urls.contest) {
        payload.contest = await fetchWithRetry(urls.contest);
      }

      return NextResponse.json({
        source: "network",
        ...payload,
      });
    } catch (err: any) {
      const is429 = String(err.message || "").includes("429");

      return NextResponse.json(
        {
          error: "Upstream error",
          message: err.message || String(err),
        },
        { status: is429 ? 429 : 500 },
      );
    } finally {
      inFlight = null;
    }
  })();

  return inFlight;
}
