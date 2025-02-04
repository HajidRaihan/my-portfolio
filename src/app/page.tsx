"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import Foto from "@/asset/foto.png";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <div className=" relative w-full lg:py-10 flex flex-col-reverse lg:flex-row lg:px-32 px-0 items-center bg-[#F5F5F5] justify-center lg:justify-between min-h-screen">
      <div className="lg:w-1/2 w-full">
        <div className="lg:block flex flex-col justify-center items-center lg:mt-0 mt-10">
          <h1 className="lg:text-[3rem] text-[1.5rem] font-semibold gradient lg:text-left text-center">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.pauseFor(500).typeString("Hi. Im Hajid Raihan").start();
              }}
              options={{
                // loop: true,
                cursor: "|",
                delay: 30,
              }}
            />
          </h1>
          {/* <h1 className="text-[3rem] font-semibold gradient">Hajid Raihan</h1> */}
          {/* <h1 className="text-[2rem] font-semibold gradient mb-5">
            A Passionate Software Developer
          </h1> */}
          <h1 className="text-[1rem] font-semibold gradient mb-5">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString("       A Passionate Software Developer")
                  .start();
              }}
              options={{
                // loop: true,
                cursor: "|",
                delay: 30,
              }}
            />
          </h1>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2500">
            <Link
              href="/contact"
              className="py-2 px-5 bg-black text-white rounded-sm lg:text-lg text-sm button-shadow"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="lg:w-1/2 w-full flex justify-center"
      >
        <div className="lg:w-96 w-64 lg:h-[500px] h-96 bg-[#6a6875] rounded-full">
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
      {/* <Navbar /> */}

      {/* <button className="py-2 px-5 bg-black text-white rounded-lg text-xl">scroll</button> */}
    </div>
  );
}

{
  /* <div className="bg-black ">
    <About />
  </div>
  <Skill />
  <Project />
  <Footer />
  <div className="bg-black "><Skill /></div> */
}
