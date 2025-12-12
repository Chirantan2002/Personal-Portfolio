"use client";
import React from "react";
import OrbitSystem from "./OrbitSystem";
import { Footer } from "@/sections/Footer";
import MainContactSection from "./MainContactSection";
import NavContact from "./NavContact";
// import ContactInfiniteScroll from "./ContactInfiniteScroll";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto">
        <NavContact />
        {/* <div className="md:hidden sm:inline-block">
          <ContactInfiniteScroll />
        </div> */}
        <div className="mt-12 md:mt-24 mb-12 md:mb-24">
          <MainContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
