"use client";

import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import ThemeSwitch from "../common/ThemeSwitch";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { GiFootprint } from "react-icons/gi";
import Link from "next/link";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={clsx(
          "flex flex-row px-4 md:px-16 py-6 items-center justify-center transition duration-700",
          showBackground &&
            "bg-white dark:bg-black dark:bg-opacity-90 drop-shadow-lg bg-opacity-90"
        )}
      >
        {/* logo */}
        <div className="flex items-center">
          <NavbarItem
            label="HOME"
            setActiveItem={setActiveItem}
            isActive={activeItem === "HOME"}
            pathname={pathname}
          />
        </div>
        <div
          className="
            flex
            flex-grow
            gap-7
            justify-center
          "
        >
          <NavbarItem
            label="INTRODUCE"
            setActiveItem={setActiveItem}
            isActive={activeItem === "INTRODUCE"}
            pathname={pathname}
          />
          <NavbarItem
            label="SKILLS"
            setActiveItem={setActiveItem}
            isActive={activeItem === "SKILLS"}
            pathname={pathname}
          />
          <NavbarItem
            label="CAREERS"
            setActiveItem={setActiveItem}
            isActive={activeItem === "CAREERS"}
            pathname={pathname}
          />
          <NavbarItem
            label="PROJECTS"
            setActiveItem={setActiveItem}
            isActive={activeItem === "PROJECTS"}
            pathname={pathname}
          />
          <NavbarItem
            label="OTHERS"
            setActiveItem={setActiveItem}
            isActive={activeItem === "OTHERS"}
            pathname={pathname}
          />
        </div>
        <div className="flex flex-row gap-3">
          {/* go to guest book */}
          <Link href={"/guestbook"}>
            <GiFootprint
              className="cursor-pointer text-[#30B0C7] hover:text-[#3079c7]"
              size={24}
            />
          </Link>
          {/* theme switch */}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
