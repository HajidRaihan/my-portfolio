import React from "react";

const Project = () => {
  return (
    <div className="max-h-screen">
      <div className="py-10 w-full  px-32 items-center  justify-between mt-32">
        <h1 className="text-[2rem] text-center mb-5 font-semibold">My Projects</h1>
        <div className="grid grid-cols-3 gap-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          {/* <ProjectCard />
        <ProjectCard /> */}
          {/* <ProjectCard /> */}
        </div>

        {/* <button className="py-2 px-5 bg-black text-white rounded-lg text-xl">scroll</button> */}
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="bg-[#] w-82  border-2 border-black bg-white  rounded-md p-2 text-black shadow-md shadow-stone-700"
    >
      <img
        src="https://akcdn.detik.net.id/visual/2020/01/30/fd8a89f8-cd07-4d7e-9a24-17c440c90e4d_169.png?w=650"
        alt=""
        className="rounded-md"
      />
      <div className="p-2">
        <h1 className="font-semibold">Project Title</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus repellat eligendi
          harum odit corrupti cupiditate cum eum deserunt doloribus?
        </p>
        <div className="mt-3">
          {/* <div className="mb-1 flex gap-2">
            <button className={`py-2 px-5 bg-black text-white rounded-lg text-xs`}>GitHub</button>
            <button className={`py-2 px-5 bg-blue-500 text-white rounded-lg text-xs`}>Visit</button>
          </div> */}
          <div className="flex gap-2 mt-2 flex-wrap">
            <Badge color="bg-yellow-500" title="Javascript" />
            <Badge color="bg-blue-700" title="React.js" />
            <Badge color="bg-blue-700" title="ResfulAPI" />
            <Badge color="bg-red-700" title="Laravel" />
            <Badge color="bg-yellow-500" title="Express" />
            <Badge color="bg-green-800" title="Android" />
          </div>
        </div>
      </div>
    </div>
  );
};

type BadgeProps = {
  color: string;
  title: string;
};

const Badge = ({ color, title }: BadgeProps) => {
  return (
    <button className={`py-1 px-2 ${color} text-white rounded-lg text-[10px]`}>{title}</button>
  );
};

export default Project;
