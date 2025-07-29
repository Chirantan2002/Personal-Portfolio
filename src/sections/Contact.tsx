import React from "react";
import GrainImage from "@/assets/images/grain.jpg";
import ContactForm from "@/components/ContactForm";

export const Contact = () => {
  return (
    <div className="py-16 pt-12 px-4 lg:py-24 lg:pt-20" id="Contact">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-slate-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center lg:justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-5xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-xl mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

    </div>
  );
};
