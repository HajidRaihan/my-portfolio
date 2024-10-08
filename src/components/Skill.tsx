import Image, { StaticImageData } from "next/image";
import React from "react";
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
import Express from "@/asset/expressjs-icon.svg";
import Sertificate1 from "@/asset/sertificate_1.png";
import Sertificate2 from "@/asset/sertificate_2.png";
import Sertificate3 from "@/asset/sertificate_3.png";
import Sertificate4 from "@/asset/sertificate_4.png";
import Sertificate5 from "@/asset/sertificate_5.png";
import Sertificate6 from "@/asset/sertificate_6.png";
import Link from "next/link";

type SkillCardProps = {
  icon: StaticImageData;
  title: string;
};

const SkillCard = ({ icon, title }: SkillCardProps) => {
  return (
    <div className="w-24 h-24 flex flex-col gap-1 p-5 border-2 border-black shadow-md justify-center items-center hover:text-black hover:scale-110 transition-transform rounded-md">
      {/* <div className="min-h-10 w-10"> */}
      <Image src={icon} alt="" className="w-full h-full" />
      {/* </div> */}
      <p className="text-[10px]">{title}</p>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="text-black w-screen flex flex-col items-center mt-20">
      <h1 className="text-[2rem] font-semibold mb-5">Skill/Tools</h1>
      <div className="flex justify-center flex-wrap gap-3 w-[700px]">
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
  );
};

// const Skill = () => {
//   return (
//     <div className="py-20 w-full  px-32 items-center text-black justify-between">
//       <div className="md:flex justify-between w-full md:h-[350px]">
//         <div className="pe-10 md:w-1/2 flex flex-col">
//           <h1 className="text-[2rem] mb-2 font-semibold">Certificates</h1>
//           <div className="grid grid-cols-2 gap-4 overflow-y-auto p-5">
//             <SertificateImage
//               image={Sertificate1}
//               href="https://drive.google.com/file/d/1XysVjZM2uK1nbwYfo-C9XkHxTl27IIDi/view?usp=drive_link"
//             />
//             <SertificateImage
//               image={Sertificate2}
//               href="https://drive.google.com/file/d/1gb16Heg7M_5BFQDRXBPtzDjnZQtXgT1n/view?usp=drive_link"
//             />
//             <SertificateImage
//               image={Sertificate3}
//               href="https://drive.google.com/file/d/1l5r72qWOfMCxBxKgnSQ3P6jhqGFRL0b_/view?usp=drive_link"
//             />
//             <SertificateImage
//               image={Sertificate4}
//               href="https://drive.google.com/file/d/18uC7H2GiBHiwAA3H-CcweKggl3Gdbh9_/view?usp=drive_link"
//             />
//             <SertificateImage
//               image={Sertificate5}
//               href="https://drive.google.com/file/d/1dkI-XyaAX-ZYGmCdLNunb_IbUk7DTvv1/view?usp=drive_link"
//             />
//             <SertificateImage
//               image={Sertificate6}
//               href="https://drive.google.com/file/d/1qiHj-evaJ1MaGKqQWXuHEuYj1y4GKY78/view?usp=drive_link"
//             />
//           </div>
//         </div>
//         <div className="md:w-1/2 md:ps-10 flex flex-col">
//           <h1 className="text-[2rem] mb-2">Skill</h1>
//           <div className="flex  flex-wrap">
//             <SkillCard icon={Html} title="HTML" />
//             <SkillCard icon={Css} title="Css" />
//             <SkillCard icon={Javascript} title="Javascript" />
//             <SkillCard icon={ReactIcon} title="React" />
//             <SkillCard icon={Next} title="Next" />
//             <SkillCard icon={Node} title="Node" />
//             <SkillCard icon={Express} title="Express" />
//             <SkillCard icon={Mongo} title="MongoDB" />
//             <SkillCard icon={Postgres} title="Postgres" />
//             <SkillCard icon={Tailwind} title="Tailwind" />
//             <SkillCard icon={Typescript} title="Typescript" />
//             <SkillCard icon={Laravel} title="Laravel" />
//           </div>
//         </div>
//       </div>

//       {/* <button className="py-2 px-5 bg-black text-white rounded-lg text-xl">scroll</button> */}
//     </div>
//   );
// };

type SertificateImageProps = {
  image: StaticImageData;
  href: string;
};

const SertificateImage = ({ image, href }: SertificateImageProps) => {
  return (
    <Link href={href} target="_blank" className="">
      <Image
        src={image}
        alt="sertificate 1"
        className="w-full cursor-pointer hover:opacity-85 transition-transform rounded-md shadow-md shadow-black"
      />
    </Link>
  );
};

export default Skill;
