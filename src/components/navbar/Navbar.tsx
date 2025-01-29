"use client";

import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

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
        className={`
          flex
          flex-row
          px-4
          md:px-16
          py-6
          items-center
          justify-center
          transition
          duration-500
          ${showBackground ? "bg-white drop-shadow-lg bg-opacity-90" : ""}
        `}
      >
        <div
          className="
            flex
            flex-row
            ml-8
            gap-7
          "
        >
          <NavbarItem label="INTRODUCE" />
          <NavbarItem label="SKILLS" />
          <NavbarItem label="CAREERS" />
          <NavbarItem label="PROJECTS" />
          <NavbarItem label="OTHERS" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
