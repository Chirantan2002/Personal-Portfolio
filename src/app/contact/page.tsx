"use client";
import React from "react";
import { Footer } from "@/sections/Footer";
import MainContactSection from "./MainContactSection";
import NavContact from "./NavContact";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto">
        <NavContact />
        <div className="mt-8 md:mb-10">
          <MainContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
