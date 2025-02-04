import Image, { StaticImageData } from "next/image";
import React from "react";
import Html from "@/asset/html.svg";
import Css from "@/asset/css.svg";
import Javascript from "@/asset/javascript.svg";
import Next from "@/asset/next.svg";
import ReactIcon from "@/asset/react.svg";
import Node from "@/asset/node.svg";
import Laravel from "@/asset/laravel.svg";
import Mongo from "@/asset/mongo.svg";
import Postgres from "@/asset/postgres.svg";
import Tailwind from "@/asset/tailwind.svg";
import Typescript from "@/asset/typescript.svg";
import Express from "@/asset/expressjs-icon.svg";

const SkillPage = () => {
  return (
    <div className="min-h-screen md:flex md:mt-0 mt-20 justify-center items-center">
      <div className="text-black w-screen md:flex justify-center items-center">
        <div className="w-fit  mb-5 md:mb-0 md:w-1/2 mx-auto">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="md:text-[2rem] text-[1.5rem] font-semibold text-center mb-1"
          >
            Skill/Tools
          </h1>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="h-[2px] bg-black w-full md:hidden"
          />
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="w-fit grid md:grid-cols-4 grid-cols-3 justify-center flex-wrap gap-5">
            <SkillCard icon={Html} title="HTML" />
            <SkillCard icon={Css} title="Css" />
            <SkillCard icon={Javascript} title="Javascript" />
            <SkillCard icon={ReactIcon} title="React" />
            <SkillCard icon={Next} title="Next" />
            <SkillCard icon={Node} title="Node" />
            <SkillCard icon={Express} title="Express" />
            <SkillCard icon={Mongo} title="MongoDB" />
            <SkillCard icon={Postgres} title="Postgres" />
            <SkillCard icon={Tailwind} title="Tailwind" />
            <SkillCard icon={Typescript} title="Typescript" />
            <SkillCard icon={Laravel} title="Laravel" />
          </div>
        </div>
      </div>
    </div>
  );
};

type SkillCardProps = {
  icon: StaticImageData;
  title: string;
};

const SkillCard = ({ icon, title }: SkillCardProps) => {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="1000"
      className="w-24 h-24 flex flex-col gap-1 p-5 border-2 border-black shadow-md justify-center items-center hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-slate-400 transition-all duration-300 rounded-md"
    >
      {/* <div className="min-h-10 w-10"> */}
      <Image src={icon} alt="" className="w-full h-full" />
      {/* </div> */}
      <p className="text-[10px]">{title}</p>
    </div>
  );
};

export default SkillPage;
