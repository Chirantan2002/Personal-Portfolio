import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";
import CTSImage1 from "@/assets/images/CTS_IMAGE_2.jpg";
import CTSImage2 from "@/assets/images/CTS_IMAGE_1.jpg";
import { motion } from "framer-motion";
import JUImage1 from "@/assets/images/JU_Image_1.jpg";
import JUImage2 from "@/assets/images/JU_Image_2.jpg";
import JUImage3 from "@/assets/images/JU_Image_3.jpg";
import JUImage4 from "@/assets/images/JU_Image_4.jpg";
import JUImage5 from "@/assets/images/JU_Image_5.jpg";
import JUImage6 from "@/assets/images/JU_Image_6.jpg";
import JUImage7 from "@/assets/images/JU_Image_7.jpg";
// import { Badge } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const JU_IMAGES = [
  JUImage1,
  JUImage2,
  JUImage3,
  JUImage4,
  JUImage5,
  JUImage6,
  JUImage7,
];

const TimelineDot = ({ year }: { year: string }) => (
  <div className="flex-shrink-0 w-17 h-17 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 group-hover:border-amber-500 transition-colors duration-200 flex items-center justify-center z-10">
    <span
      className={`${spaceGrotesk.className} text-sm text-stone-400 text-center leading-tight`}
    >
      {year}
    </span>
  </div>
);

const Badge = ({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "gold" | "emerald" | "default";
}) => {
  const styles = {
    gold: "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
    emerald:
      "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400",
    default:
      "bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400",
  };
  return (
    <span
      className={`${spaceGrotesk.className} text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5 ${styles[variant]}`}
    >
      {label}
    </span>
  );
};

const ImageStrip = ({
  images,
  duration = 90,
}: {
  images: any[];
  duration?: number;
}) => (
  <div className="relative overflow-hidden py-4 bg-stone-50 dark:bg-stone-950 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
    <motion.div
      animate={{ x: "-50%" }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="flex gap-2.5 w-max group"
    >
      {[...images, ...images].map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          width={200}
          height={130}
          className="rounded-lg border border-stone-200 dark:border-stone-700 hover:border-emerald-400 hover:scale-[1.04] transition-all duration-200 flex-shrink-0 object-cover"
          style={{ width: 200, height: 130 }}
        />
      ))}
    </motion.div>
  </div>
);

const MetaRow = ({
  items,
}: {
  items: { label: string; color?: "gold" | "emerald" }[];
}) => (
  <div className={`${spaceGrotesk.className} px-6 py-3.5 flex gap-5 flex-wrap`}>
    {items.map((item, i) => (
      <span
        key={i}
        className="flex items-center gap-1.5 font-mono text-[12px] text-stone-500 dark:text-stone-400 truncate"
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${item.color === "emerald" ? "bg-emerald-500" : "bg-amber-500"} opacity-70`}
        />
        {item.label}
      </span>
    ))}
  </div>
);

export const Academics = () => {
  return (
    <div className="container mx-auto px-4 py-24 md:py-40">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="academics"
          title="The Journey so far"
          about="Get now about my academic journey"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[21px] top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-stone-300 to-transparent dark:via-stone-700 opacity-40" />

          <div className="flex flex-col gap-0">
            {/* BACHELORS */}
            <div className="flex gap-7 pb-10 group">
              <TimelineDot year={"2024\n–\nnow"} />
              <div className="flex-1 flex flex-col rounded-2xl border border-stone-200 dark:border-stone-700 hover:border-amber-500/40 bg-stone-100/60 dark:bg-stone-800/60 overflow-hidden transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex  items-start justify-between gap-3 px-6 py-5 border-b border-stone-200 dark:border-stone-700">
                  <div className="">
                    <h3 className="font-serif text-[22px] text-stone-900 dark:text-stone-100 mb-1">
                      Bachelor's Degree
                    </h3>
                  </div>
                  <Badge label="B.Tech · IT" variant="gold" />
                </div>
                <div className="mb-4 px-6 py-5 border-b border-stone-700">
                  <p
                    className={`${spaceGrotesk.className} text-[13.5px] text-stone-500 dark:text-stone-400`}
                  >
                    Bachelor of Engineering in Information Technology — Jadavpur University
                  </p>
                </div>
                <ImageStrip images={JU_IMAGES} duration={120} />
                <MetaRow
                  items={[
                    {
                      label:
                        "Plot No.8, B-73-80, Salt Lake Bypass, LB Block, Sector 3, Bidhannagar, Kolkata, West Bengal 700106",
                      color: "gold",
                    },
                  ]}
                />
              </div>
            </div>

            {/* DIPLOMA */}
            <div className="flex gap-7 pb-10 group">
              <TimelineDot year={"2018\n–\n2021"} />
              <div className="flex-1 flex flex-col rounded-2xl border border-stone-200 dark:border-stone-700 hover:border-emerald-500/40 bg-stone-100/60 dark:bg-stone-800/60 overflow-hidden transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-3 px-6 py-5 border-b border-stone-200 dark:border-stone-700">
                  <div>
                    <h3 className="font-serif text-[22px] text-stone-900 dark:text-stone-100 mb-1">
                      Diploma
                    </h3>
                  </div>
                  <Badge label="8.6 GPA" variant="emerald" />
                </div>
                <div className="mb-4 px-6 py-5 border-b border-stone-700">
                  <p
                    className={`${spaceGrotesk.className} text-[13.5px] text-stone-500 dark:text-stone-400`}
                  >
                    Computer Science & Technology — The Calcutta Technical
                    School
                  </p>
                </div>
                <ImageStrip
                  images={[
                    CTSImage1,
                    CTSImage2,
                    CTSImage1,
                    CTSImage2,
                    CTSImage1,
                    CTSImage2,
                  ]}
                  duration={60}
                />
                <MetaRow
                  items={[
                    {
                      label:
                        "110, SN Banerjee Road, Esplanade, Taltala, Kolkata, West Bengal 700013",
                      color: "emerald",
                    },
                  ]}
                />
              </div>
            </div>

            {/* HIGH SCHOOL */}
            <div className="flex gap-7 group">
              <TimelineDot year={"–\n2020"} />
              <div className="flex-1 rounded-2xl border border-stone-200 dark:border-stone-700 hover:border-stone-400/60 bg-stone-100/60 dark:bg-stone-800/60 overflow-hidden transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-3 px-6 py-5 border-b border-stone-200 dark:border-stone-700">
                  <div>
                    <h3 className="font-serif text-[22px] text-stone-900 dark:text-stone-100 mb-1">
                      High School
                    </h3>
                    <p
                      className={`${spaceGrotesk.className} text-[13.5px] text-stone-500 dark:text-stone-400`}
                    >
                      Bhatpara Amarkrishna Pathsala — West Bengal Board
                    </p>
                  </div>
                  <Badge label="School" />
                </div>
                <div className="p-5 grid grid-cols-2 gap-3">
                  {[
                    ["81%", "10th Boards"],
                    ["76%", "12th Boards"],
                  ].map(([val, label]) => (
                    <div
                      key={label}
                      className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl p-4 text-center"
                    >
                      <div className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-1">
                        {val}
                      </div>
                      <div className="font-mono text-[11px] tracking-wider text-stone-400 uppercase">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
