"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import {
  getLeetcodeFullProfileData,
  getLeetcodeProfileData,
  getLeetcodeSolvedData,
  getLeetcodeBadgesData,
  getLeetcodeContestData,
} from "@/data-access/leetcode-info";
import { Space_Grotesk } from "next/font/google";
import { SiLeetcode } from "react-icons/si";
import ShinyText from "@/components/ShinyText";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

type LeetcodeProfile = {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
};

type LeetcodeBadges = {
  badgesCount: number;
  badges: Array<{
    id: string;
    displayName: string;
    icon: string;
    creationTime: string;
  }>;
};

type LeetcodeContest = {
  contestAttend: number;
  contestRating: number;
  contestGlobalRanking: number;
  totalParticipants: number;
  contestTopPercentage: number;
  contestBadges: {
    name: string;
  };
};

type LeetcodeSolved = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

const StatsSection = () => {
  //   const profile_info = getLeetcodeProfileData();

  const [profile, setProfile] = useState<LeetcodeProfile | null>(null);
  const [badges, setBadges] = useState<LeetcodeBadges | null>(null);
  const [solved, setSolved] = useState<LeetcodeSolved | null>(null);
  const [contests, setContests] = useState<LeetcodeContest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("starting to fetch data...");
        const [profileData, badgesData, solvedData, contestsData] =
          await Promise.all([
            getLeetcodeProfileData(),
            getLeetcodeBadgesData(),
            getLeetcodeSolvedData(),
            getLeetcodeContestData(),
          ]);

        setProfile(profileData);
        setBadges(badgesData);
        setSolved(solvedData);
        setContests(contestsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error)
    return <div className="text-center p-8 text-red-600">Error: {error}</div>;

  return (
    <div className={`${spaceGrotesk.className} container mx-auto px-4 my-16`}>
      <SectionHeader
        eyebrow="Stats that represent me"
        title="Problem Solving Snapshot"
        about="A quick look at the stats that reflect my dedication to mastering DSA and coding excellence."
      />
      <main className="mb-8">
        <Card>
          <section className="flex flex-col gap-4">
            {/* Profile-Image */}
            <div className="flex items-center justify-between mb-8">
              <span className="flex items-center gap-2 text-sm uppercase font-semibold text-gray-200">
                <SiLeetcode className="size-4" />
                <span className="-mx-1">LeetCode</span>
                <Link href="https://leetcode.com/Moonjar_007/" target="_blank" className="-mx-1">
                  <ArrowUpRight className="size-5"/>
                </Link>
              </span>
              <span className="md:text-3xl font-bold tracking-tight text-blue-300">
                #{profile?.ranking}
              </span>
            </div>
            <div className="flex justify-center items-center mb-4">
              <img
                src={`${profile?.avatar}`}
                alt="avatar_image"
                height={120}
                width={120}
                className="border-4 border-orange-400 rounded-full"
              />
            </div>

            {/* Profile-Info */}
            <div className="flex flex-col items-center mb-6 gap-2">
              <span className="uppercase text-3xl md:text-4xl font-bold">
                {profile?.name}
              </span>
              <div className="bg-neutral-800 py-1 px-4 rounded-full">
                <ShinyText
                  text={`@${profile?.username}`}
                  disabled={false}
                  speed={3}
                  className="animate-shine text-xl font-black"
                />
              </div>
            </div>

            {/* Solved-Info */}
            <div className="mb-6">
              <ul className="space-y-2 font-bold tracking-wider">
                <li className="flex items-center justify-between bg-white/30 rounded-lg px-4 py-2">
                  <span className="text-xl md:text-2xl">Total Solved</span>
                  <span className="text-4xl">{solved?.solvedProblem}</span>
                </li>
                <li className="flex items-center justify-between bg-green-600/30 px-4 py-2 rounded-lg">
                  <span className="text-2xl">Easy</span>
                  <span className="text-4xl">{solved?.easySolved}</span>
                </li>
                <li className="flex items-center justify-between bg-amber-500/30 rounded-lg px-4 py-2">
                  <span className="text-2xl">Medium</span>
                  <span className="text-4xl">{solved?.mediumSolved}</span>
                </li>
                <li className="flex items-center justify-between bg-red-500/30 px-4 py-2 rounded-lg">
                  <span className="text-2xl">Hard</span>
                  <span className="text-4xl">{solved?.hardSolved}</span>
                </li>
              </ul>
            </div>

            {/* Contest-Info */}
            <div className="flex flex-col gap-4">
              <h1 className="text-center font-semibold text-xl md:text-4xl mb-4">
                About those Contests
              </h1>
              <ul className="space-y-2 font-bold tracking-wider">
                <li className="flex justify-between items-center bg-purple-400/40 px-4 py-2 rounded-lg">
                  <span className="text-2xl">Attended</span>
                  <span className="text-4xl">{contests?.contestAttend}</span>
                </li>
                <li className="flex justify-between items-center bg-purple-400/40 px-4 py-2 rounded-lg">
                  <span className="text-2xl">Rating</span>
                  <span className="text-4xl">
                    {contests?.contestRating?.toFixed(0)}
                  </span>
                </li>
                <li className="flex items-center justify-between bg-purple-400/40 px-4 py-2 rounded-lg">
                  <span className="text-xl md:text-2xl">Ranking</span>
                  <span className="">
                    <span className="text-2xl">
                      {contests?.contestGlobalRanking}
                    </span>{" "}
                    /{" "}
                    <span className="text-xs md:text-sm">
                      {contests?.totalParticipants}
                    </span>
                  </span>
                </li>
                <li className="flex justify-between items-center bg-purple-400/40 px-4 py-2 rounded-lg">
                  <span className="text-2xl">Top</span>
                  <span>
                    <span className="text-4xl">
                      {contests?.contestTopPercentage}
                    </span>
                    %
                  </span>
                </li>
              </ul>
            </div>

            {/* Badges */}
            <div>
              <div className="flex justify-center mt-4 mb-6 md:mt-12">
                {/* For knight Badge */}
                <div className="inline-block shadow-2xl">
                  <img
                    src={"./knight.png"}
                    alt={"Knight-Badge-icon"}
                    height={70}
                    width={70}
                    className="inline-block"
                  />
                </div>
                {/* Badges */}
                {badges?.badges.slice(1, 11).map((badge) => {
                  return (
                    <div
                      key={badge.id || badge.displayName}
                      className="inline-block"
                    >
                      <img
                        src={`${badge.icon}`}
                        alt={`${badge.displayName}-image`}
                        height={70}
                        width={70}
                        className="inline-block"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </Card>
      </main>
    </div>
  );
};

export default StatsSection;
