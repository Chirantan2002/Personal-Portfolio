"use client";
import React from "react";
import OrbitSystem from "./OrbitSystem";
import { Footer } from "@/sections/Footer";
import MainContactSection from "./MainContactSection";
import NavContact from "./NavContact";
import ContactInfiniteScroll from "./ContactInfiniteScroll";

const page = () => {
  return (
    <div className="">
      <div className="text-white bg-zinc-950 h-full w-screen">
        <div className="">
          <NavContact />
        </div>
        <div className="mt-16 mb-16">
          <OrbitSystem />
        </div>
        <div className="md:hidden sm:inline-block">
          <ContactInfiniteScroll />
        </div>
        <div className="mt-32 mb-24">
          <MainContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
