import React from "react";

import ProjectKudapan from "@/asset/kudapan-project.png";
import Mathevent from "@/asset/math-event.png";
import Garamqu from "@/asset/garamqu.png";
import Itsla from "@/asset/it-sla.png";
import Image, { StaticImageData } from "next/image";

const Project = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="py-10 w-full  px-32 items-center  justify-between mt-10">
        <div className="mx-auto mb-5 w-fit">
          <h1 className="text-[2rem] text-center font-semibold">My Projects</h1>
          <div className="h-[2px] bg-black w-full" />
        </div>
        <div className="grid grid-cols-3 gap-7 p-5 h-[70vh] max-h-[70vh] overflow-y-auto">
          <ProjectCard
            title="Kudapan App"
            description="Platform pemesanan pada food court kudapan yang memungkinkan pelanggan untuk melakukan pemesanan, menambahkan barang ke keranjang, dan mengelola pesanan mereka secara efisien."
            image={ProjectKudapan}
            techs={[
              { name: "React.js", color: "bg-blue-600" },
              { name: "Express.js", color: "bg-yellow-500" },
              { name: "MongoDB", color: "bg-green-600" },
              { name: "Node.js", color: "bg-green-800" },
            ]}
          />
          <ProjectCard
            title="Website Mathematics Event XXIV"
            description="Website informasi dan pendaftaran Mathematics Event XXIV"
            image={Mathevent}
            techs={[
              { name: "React.js", color: "bg-blue-600" },
              { name: "Laravel", color: "bg-red-700" },
              { name: "MySQL", color: "bg-blue-800" },
            ]}
          />
          <ProjectCard
            title="Garamqu"
            description="Website ini dibuat untuk mendukung penelitian yang dilakukan oleh Universitas Hasanuddin kepada petani garam di kabupaten Maros - Sulawesi Selatan"
            image={Garamqu}
            techs={[
              { name: "React.js", color: "bg-blue-600" },
              { name: "Laravel", color: "bg-red-700" },
              { name: "MySQL", color: "bg-blue-800" },
            ]}
          />
          <ProjectCard
            title="IT SLA Maintenance"
            description="Website ini dibuat untuk membantu mencatat dan memonitoring kegiatan maintenance divisi IT Makassar Metro Network Makassar"
            image={Itsla}
            techs={[
              { name: "React.js", color: "bg-blue-600" },
              { name: "Laravel", color: "bg-red-700" },
              { name: "MySQL", color: "bg-blue-800" },
            ]}
          />
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
          {/* <ProjectCard />
        <ProjectCard /> */}
          {/* <ProjectCard /> */}
        </div>

        {/* <button className="py-2 px-5 bg-black text-white rounded-lg text-xl">scroll</button> */}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  techs: TechBadge[];
}

interface TechBadge {
  name: string;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, techs }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="bg-[#]  border-2 border-black bg-white  rounded-md p-2 text-black shadow-md shadow-stone-700 hover:shadow-lg hover:scale-105 hover:cursor-pointer hover:shadow-slate-400 transition-all duration-300"
    >
      <Image
        src={image}
        alt="project"
        className="rounded-md h-32 object-cover object-top"
        width={500}
      />
      <div className="p-2">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-xs">{description}</p>
        <div className="mt-3">
          {/* <div className="mb-1 flex gap-2">
            <button className={`py-2 px-5 bg-black text-white rounded-lg text-xs`}>GitHub</button>
            <button className={`py-2 px-5 bg-blue-500 text-white rounded-lg text-xs`}>Visit</button>
          </div> */}
          <div className="flex gap-2 mt-2 flex-wrap">
            {techs?.map((tech, index) => (
              <Badge key={index} color={tech.color} title={tech.name} />
            ))}
            {/* <Badge color="bg-blue-700" title="React.js" />

              <Badge color="bg-blue-700" title="ResfulAPI" />
              <Badge color="bg-red-700" title="Laravel" />
              <Badge color="bg-yellow-500" title="Express" />
              <Badge color="bg-green-800" title="Android" /> */}
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
