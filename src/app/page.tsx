"use client";

import "aos/dist/aos.css";
import Image from "next/image";
import Foto from "@/asset/foto.png";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <div className=" relative py-10 w-full flex px-32 items-center bg-[#F5F5F5] justify-between min-h-screen">
      <div className="w-1/2  ">
        <div>
          <h1 className="text-[3rem] font-semibold gradient">
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
          <h1 className="text-[2rem] font-semibold gradient mb-5">
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
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2500">
            <Link
              href="/contact"
              className="py-2 px-5 bg-black text-white rounded-sm text-md button-shadow"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="w-1/2">
        <div className="w-96 h-[500px] ms-32 bg-[#6a6875] rounded-full">
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
