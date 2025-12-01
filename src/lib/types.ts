export type LeetcodeProfile = {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
};

export type LeetcodeBadges = {
  badgesCount: number;
  badges: Array<{
    id: string;
    displayName: string;
    icon: string;
    creationTime: string;
  }>;
};

export type LeetcodeContest = {
  contestAttend: number;
  contestRating: number;
  contestGlobalRanking: number;
  totalParticipants: number;
  contestTopPercentage: number;
  contestBadges: {
    name: string;
  };
};

export type LeetcodeSolved = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};
