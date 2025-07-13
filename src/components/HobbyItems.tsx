import React from "react";

const hobbies = [
  {
    title: "Drawing",
    emoji: "🎨",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Listening Music",
    emoji: "🎵",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
];

const HobbyItems = () => {
  return (
    <div className="flex space-x-2 px-2">
      {hobbies.map((hobby) => (
        <div
          key={hobby.title}
          className="inline-flex items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 w-max space-x-1"
        >
          <span>{hobby.emoji}</span>
          <span className="font-medium text-slate-950">{hobby.title}</span>
        </div>
      ))}
    </div>
  );
};

export default HobbyItems;
