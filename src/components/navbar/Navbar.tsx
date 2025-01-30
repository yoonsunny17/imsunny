"use client";

import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("");

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
        {/* logo */}
        <div className="flex items-center">
          <NavbarItem
            label="HOME"
            setActiveItem={setActiveItem}
            isActive={activeItem === "HOME"}
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
          />
          <NavbarItem
            label="SKILLS"
            setActiveItem={setActiveItem}
            isActive={activeItem === "SKILLS"}
          />
          <NavbarItem
            label="CAREERS"
            setActiveItem={setActiveItem}
            isActive={activeItem === "CAREERS"}
          />
          <NavbarItem
            label="PROJECTS"
            setActiveItem={setActiveItem}
            isActive={activeItem === "PROJECTS"}
          />
          <NavbarItem
            label="OTHERS"
            setActiveItem={setActiveItem}
            isActive={activeItem === "OTHERS"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
