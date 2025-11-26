import axios from "axios";

const PROFILE_URI = process.env.NEXT_PUBLIC_LEETCODE_PROFILE_URI;
const FULL_PROFILE_URI = process.env.NEXT_PUBLIC_LEETCODE_FULL_PROFILE_URI;
const BADGES_URI = process.env.NEXT_PUBLIC_LEETCODE_BADGES_URI;
const CONTEST_URI = process.env.NEXT_PUBLIC_LEETCODE_CONTEST_URI;
const SOLVED_URI = process.env.NEXT_PUBLIC_LEETCODE_SOLVED_URI;

// Debug: Log env variables
// console.log("LeetCode API URLs:", {
//   PROFILE_URI,
//   FULL_PROFILE_URI,
//   BADGES_URI,
//   CONTEST_URI,
//   SOLVED_URI,
// });

export const getLeetcodeProfileData = async () => {
  try {
    if (!PROFILE_URI) throw new Error("PROFILE_URI is not defined");
    const res = await axios.get(PROFILE_URI);
    console.log("Profile data:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching profile:", err);
    throw err;
  }
};

export const getLeetcodeFullProfileData = async () => {
  try {
    if (!FULL_PROFILE_URI) throw new Error("FULL_PROFILE_URI is not defined");
    const res = await axios.get(FULL_PROFILE_URI);
    console.log("Full profile data:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching full profile:", err);
    throw err;
  }
};

export const getLeetcodeBadgesData = async () => {
  try {
    if (!BADGES_URI) throw new Error("BADGES_URI is not defined");
    const res = await axios.get(BADGES_URI);
    console.log("Badges data:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching badges:", err);
    throw err;
  }
};

export const getLeetcodeContestData = async () => {
  try {
    if (!CONTEST_URI) throw new Error("CONTEST_URI is not defined");
    const res = await axios.get(CONTEST_URI);
    console.log("Contest data:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching contest:", err);
    throw err;
  }
};

export const getLeetcodeSolvedData = async () => {
  try {
    if (!SOLVED_URI) throw new Error("SOLVED_URI is not defined");
    const res = await axios.get(SOLVED_URI);
    console.log("Solved data:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching solved:", err);
    throw err;
  }
};
