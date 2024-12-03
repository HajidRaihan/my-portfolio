"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <div className="bg-black ">
        <About />
      </div>
      <Skill />
      <Project />
      <Footer />
      <div className="bg-black ">{/* <Skill /> */}</div>
    </div>
  );
}
