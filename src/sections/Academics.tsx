import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";

export const Academics = () => {
  return (
    <div className="container mx-auto">
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
            </Card>
            <Card>
              <CardHeader
                title="Diploma"
                description="Completed Diploma in Computer Science & Technology from The Calcutta Technical School, with overall 8.6 GPA."
              />
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
