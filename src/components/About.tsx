"use client";

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
import Image from "next/image";

const About = () => {
  return (
    <div className="py-10 w-full  px-32 items-center text-white justify-between">
      <div className="flex justify-between w-full">
        <div className="pe-10 w-1/2 ">
          <h1 className="text-[3rem]">About</h1>
          <p className="text-justify">
            I'm an undergraduated student at Hasanuddin University with System Information Major. I
            recently began my journey as a software developer and am excited about the endless
            possibilities that coding provides. I've completed courses in html, css, javascript,
            Node.js, React.js, Next.js, Express.js, MongoDB, little bit Laravel and have started
            building small projects to sharpen my skills. My goal is to contribute to impactful
            projects and continue expanding my knowledge in both front-end and back-end development.
          </p>
        </div>
        <div className="w-1/2 ps-10">
          <h1 className="text-[3rem]">Skill</h1>
          <div className="flex gap-3 flex-wrap">
            <SkillCard icon={Html} />
            <SkillCard icon={Css} />
            <SkillCard icon={Javascript} />
            <SkillCard icon={ReactIcon} />
            {/* <SkillCard icon={Next} /> */}
            <SkillCard icon={Node} />
            <SkillCard icon={Mongo} />
            <SkillCard icon={Laravel} />
            <SkillCard icon={Postgres} />
            <SkillCard icon={Tailwind} />
            <SkillCard icon={Typescript} />
          </div>
        </div>
      </div>

      {/* <button className="py-2 px-5 bg-black text-white rounded-lg text-xl">scroll</button> */}
    </div>
  );
};

const SkillCard = ({ icon }: { icon: string }) => {
  return (
    <div className="w-20 h-20 p-5 flex justify-center items-center bg-[#121212] button-shadow rounded-md">
      <Image src={icon} alt="" className="w-full h-full" />
    </div>
  );
};

export default About;
