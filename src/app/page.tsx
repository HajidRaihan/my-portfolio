"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import Foto from "../asset/foto.png";
import Blob from "../asset/blob.svg";
import Html from "../asset/html.svg";
import Css from "../asset/css.svg";
import Javascript from "../asset/javascript.svg";
import Next from "../asset/next.svg";
import ReactIcon from "../asset/react.svg";
import Node from "../asset/node.svg";
import Laravel from "../asset/laravel.svg";
import Mongo from "../asset/mongo.svg";
import Postgres from "../asset/postgres.svg";
import Tailwind from "../asset/tailwind.svg";
import Typescript from "../asset/typescript.svg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-black ">
        <About />
        {/* <Skill /> */}
      </div>
    </>
  );
}

const Header = () => {
  return (
    <div className="py-10 w-full flex px-32 items-center bg-[#F5F5F5] justify-between">
      <div className="w-1/2   justify-center items-center">
        <div className="">
          <h1 className="text-[3rem] font-semibold gradient">
            {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcome to my website!")
                .start();
            }}
            options={{
              // loop: true,
              cursor: "|",
              delay: 100,
            }}
          /> */}
            Hi. I'm Hajid Raihan
          </h1>
          {/* <h1 className="text-[3rem] font-semibold gradient">Hajid Raihan</h1> */}
          <h1 className="text-[2rem] font-semibold gradient">A Passionate Software Developer</h1>
          <button className="py-2 px-5 bg-black text-white rounded- text-md mt-5 button-shadow">
            Contact me
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <div className="w-96 h-[500px] ms-20 bg-[#6a6875] rounded-full">
          {/* <Image
          src={Blob}
          alt="Profile Image"
          className="absolute z-10 w-[500px] h-[500px] object-cover rounded-full bottom-0 left-1/2 transform -translate-x-1/2"
        /> */}

          {/* Profile image */}
          <Image
            src={Foto}
            alt="Profile Image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* <button className="py-2 px-5 bg-black text-white rounded-lg text-xl">scroll</button> */}
    </div>
  );
};

const About = () => {
  return (
    <div className="py-10 w-full  px-32 items-center text-white justify-between">
      <h1 className="text-[3rem]">About</h1>
      <div className="flex justify-between w-full">
        <p className="text-justify w-1/2 pe-10">
          I'm an undergraduated student at Hasanuddin University with System Information Major. I
          recently began my journey as a software developer and am excited about the endless
          possibilities that coding provides. I've completed courses in html, css, javascript,
          Node.js, React.js, Next.js, Express.js, MongoDB, little bit Laravel and have started
          building small projects to sharpen my skills. My goal is to contribute to impactful
          projects and continue expanding my knowledge in both front-end and back-end development.
        </p>
        <div className="w-1/2">
          <div className="flex gap-3 flex-wrap ps-10">
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

const Skill = () => {
  return (
    <div className="w-full px-32 items-center text-white justify-between">
      {/* <h1 className="text-[3rem]">Languages / Frameworks /Tools </h1> */}
      <div className="flex gap-3 flex-wrap justify-">
        <SkillCard icon={Html} />
        <SkillCard icon={Css} />
        <SkillCard icon={Javascript} />
        <SkillCard icon={ReactIcon} />
        <SkillCard icon={Next} />
        <SkillCard icon={Node} />
        <SkillCard icon={Mongo} />
        <SkillCard icon={Laravel} />
        <SkillCard icon={Postgres} />
        <SkillCard icon={Tailwind} />
        <SkillCard icon={Typescript} />
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
