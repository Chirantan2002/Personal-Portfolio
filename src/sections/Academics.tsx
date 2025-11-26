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

const JU_IMAGES = [
  JUImage1,
  JUImage2,
  JUImage3,
  JUImage4,
  JUImage5,
  JUImage6,
  JUImage7,
];

export const Academics = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="mt-16 md:mt-24 lg:mt-32 mb-16 md:mb-24 lg:mb-32 px-4">
        <div>
          <SectionHeader
            eyebrow="Academic Perspectives"
            title="The Journey So Far"
            about="Learn more about my academic background and experience."
          />
          <div className="flex flex-col gap-8">
            <Card className="h-max">
              <CardHeader
                title="Bachelors"
                description="Bachelors of Information Technology from Jadavpur University"
              />

              {/* <Image/> */}
              <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 space-x-4">
                <motion.div
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: "-100%",
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 120,
                    ease: "linear",
                  }}
                  className="flex flex-shrink-0 items-center justify-center space-x-4"
                >
                  {JU_IMAGES.map((item, index) => (
                    <Image
                      key={index}
                      src={item}
                      alt="Ju_Images"
                      width={400}
                      height={400}
                      style={{
                        objectFit: "cover",
                        borderRadius: "3%",
                      }}
                      className="border-2 border-stone-700 hover:scale-105 transition ease-in-out duration-300 hover:border-emerald-400"
                    />
                  ))}
                </motion.div>
                <motion.div
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: "-100%",
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 120,
                    ease: "linear",
                  }}
                  className="flex flex-shrink-0 items-center justify-center space-x-4"
                >
                  {JU_IMAGES.map((item, index) => (
                    <Image
                      key={index}
                      src={item}
                      alt="Ju_Images"
                      width={400}
                      height={400}
                      style={{
                        objectFit: "cover",
                        borderRadius: "3%",
                      }}
                      className="border-2 border-stone-700 hover:scale-105 transition ease-in-out duration-300 hover:border-emerald-400"
                    />
                  ))}
                </motion.div>
              </div>
            </Card>
            <Card className="-my-1 overflow-clip">
              <CardHeader
                title="Diploma"
                description="Completed Diploma in Computer Science & Technology from The Calcutta Technical School, with overall 8.6 GPA."
              />
              <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: "",
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear",
                  }}
                  className="flex items-center justify-center space-x-4 "
                >
                  <Image
                    src={CTSImage1}
                    alt=""
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", borderRadius: "3%" }}
                  />
                  <Image
                    src={CTSImage2}
                    alt=""
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", borderRadius: "3%" }}
                  />
                  <Image
                    src={CTSImage2}
                    alt=""
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", borderRadius: "3%" }}
                  />
                  <Image
                    src={CTSImage2}
                    alt=""
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", borderRadius: "3%" }}
                  />
                  <Image
                    src={CTSImage2}
                    alt=""
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", borderRadius: "3%" }}
                  />
                  <Image
                    src={CTSImage2}
                    alt=""
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", borderRadius: "3%" }}
                  />
                  <Image
                    src={CTSImage2}
                    alt=""
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", borderRadius: "3%" }}
                  />
                  <Image
                    src={CTSImage2}
                    alt=""
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", borderRadius: "3%" }}
                  />
                </motion.div>
              </div>
            </Card>
            <Card>
              <CardHeader
                title="High Schooling"
                description="Completed High Schooling from Bhatpara Amarkrishna Pathsala, with 81% in 10th boards & 76% in 12th boards."
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
