"use client";

import Image, { StaticImageData } from "next/image";
import Sertificate1 from "@/asset/sertificate_1.png";
import Sertificate2 from "@/asset/sertificate_2.png";
import Sertificate3 from "@/asset/sertificate_3.png";
import Sertificate4 from "@/asset/sertificate_4.png";
import Sertificate5 from "@/asset/sertificate_5.png";
import Sertificate6 from "@/asset/sertificate_6.png";
import Sertificate7 from "@/asset/sertificate_7.png";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative py-10 w-full flex items-center bg-[#F5F5F5] justify-between max-h-screen overflow-hidden">
      <div className="py-20 w-full px-20 items-center text-black justify-between">
        <div className="md:flex justify-between w-full h-full">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="h-auto w-1/2 md:pe-20 flex flex-col justify-center items-center"
          >
            <h1 className="text-[2rem] font-semibold ">About me</h1>
            {/* <div className="w-40 border-2"></div>    */}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="md:w-1/2 flex flex-col"
          >
            <p className=" flex-grow text-sm font-mono">
              I&apos;m an undergraduated student at Hasanuddin University with System Information
              Major. I recently began my journey as a software developer and am excited about the
              endless possibilities that coding provides. I&apos;ve completed courses in html, css,
              javascript, Node.js, React.js, Next.js, Express.js, MongoDB, little bit Laravel and
              have started building small projects to sharpen my skills. My goal is to contribute to
              impactful projects and continue expanding my knowledge in both front-end and back-end
              development.
            </p>
            <p className="font-medium text-lg mt-2">Certificates</p>
            <div className="border w-20 mb-2 border-black" />
            <div className="grid grid-cols-3 gap-4 overflow-y-auto p-3 h-[220px]">
              <SertificateImage
                image={Sertificate1}
                href="https://drive.google.com/file/d/1XysVjZM2uK1nbwYfo-C9XkHxTl27IIDi/view?usp=drive_link"
              />
              <SertificateImage
                image={Sertificate2}
                href="https://drive.google.com/file/d/1gb16Heg7M_5BFQDRXBPtzDjnZQtXgT1n/view?usp=drive_link"
              />
              <SertificateImage
                image={Sertificate3}
                href="https://drive.google.com/file/d/1l5r72qWOfMCxBxKgnSQ3P6jhqGFRL0b_/view?usp=drive_link"
              />
              <SertificateImage
                image={Sertificate4}
                href="https://drive.google.com/file/d/18uC7H2GiBHiwAA3H-CcweKggl3Gdbh9_/view?usp=drive_link"
              />
              <SertificateImage
                image={Sertificate5}
                href="https://drive.google.com/file/d/1dkI-XyaAX-ZYGmCdLNunb_IbUk7DTvv1/view?usp=drive_link"
              />
              <SertificateImage
                image={Sertificate6}
                href="https://drive.google.com/file/d/1qiHj-evaJ1MaGKqQWXuHEuYj1y4GKY78/view?usp=drive_link"
              />
              <SertificateImage
                image={Sertificate7}
                href="https://drive.google.com/file/d/1e7_xYr9DdH6562skelVEukjWkwOjXadj/view?usp=sharing"
              />
            </div>
          </div>
        </div>

        {/* <button className="py-2 px-5 bg-black text-white rounded-lg text-xl">scroll</button> */}
      </div>
    </div>
  );
};

type SertificateImageProps = {
  image: StaticImageData;
  href: string;
};

const SertificateImage = ({ image, href }: SertificateImageProps) => {
  return (
    <Link href={href} target="_blank">
      <Image
        src={image}
        alt="sertificate"
        className="w-full cursor-pointer hover:opacity-85 transition-transform "
      />
    </Link>
  );
};

export default About;
