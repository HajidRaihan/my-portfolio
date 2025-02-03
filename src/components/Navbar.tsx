"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  const route = usePathname();

  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3  ">
      <ul className="flex gap-10 relative">
        <NavbarItem isActive={route === "/"}>Home</NavbarItem>
        <NavbarItem isActive={route === "/about"}>About</NavbarItem>
        <NavbarItem isActive={route === "/skills"}>Skills</NavbarItem>
        <NavbarItem isActive={route === "/project"}>Project</NavbarItem>
        <NavbarItem isActive={route === "/contact"}>Contact</NavbarItem>
      </ul>
    </div>
  );
};

interface NavbarItemProps {
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ children, isActive }) => {
  return (
    <li className="relative text-sm cursor-pointer">
      <Link
        href={children === "Home" ? "/" : `/${(children as string).toLowerCase()}`}
        className="relative px-2 py-1"
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute left-0 bottom-0 h-[2px] bg-black w-full"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}
      </Link>
    </li>
  );
};

export default Navbar;
