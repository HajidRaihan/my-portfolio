"use client";

import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import Typewriter from "typewriter-effect";
import Blob from "../asset/blob.svg";
import Html from "@/asset/html.svg";
import Css from "@/asset/css.svg";
import Javascript from "../asset/javascript.svg";
import Next from "../asset/next.svg";
import ReactIcon from "../asset/react.svg";
import Node from "../asset/node.svg";
import Laravel from "../asset/laravel.svg";
import Mongo from "../asset/mongo.svg";
import Postgres from "../asset/postgres.svg";
import Tailwind from "../asset/tailwind.svg";
import Typescript from "../asset/typescript.svg";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Footer from "@/components/Footer";

export default function Home() {
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
