"use client";

import Image from "next/image";
import Foto from "@/asset/foto.png";
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

export default Header;
