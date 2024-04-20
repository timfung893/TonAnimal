import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 bg-[#0098eb] opacity-100 backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/toncoin-logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-white text-xl">
            Ton Animal
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 opacity-100">
          <div className="flex items-center justify-between w-full h-auto border border-[#fff]  mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-ton" className="cursor-pointer font-bold text-xl sm:text-lg text-sm">
              About Ton
            </a>
            <a href="#skills" className="cursor-pointer font-bold text-xl sm:text-lg text-sm">
              Ton Animal Box
            </a>
            <a href="#tonAnimal" className="cursor-pointer font-bold text-xl sm:text-lg text-sm">
              Ton Animal
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
