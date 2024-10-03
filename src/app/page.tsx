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

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[#09090b] ">
        <About />
        {/* <Skill /> */}
        <Project />
      </div>
    </>
  );
}
