import Image from "next/image";
import React from "react";

interface NavbarItemProps {
  label: string;
  setActiveItem: (item: string) => void;
  isActive: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  setActiveItem,
  isActive,
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {label === "HOME" ? (
        <div
          className={`text-sm cursor-pointer transition ${
            isActive ? "text-[#30B0C7]" : "hover:text-[#30B0C7]"
          }`}
          onClick={() => {
            setActiveItem(label);
            scrollToSection(label);
          }}
        >
          <Image
            src={"/imsunny/images/ImSunny.png"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
      ) : (
        <div
          className={`text-sm cursor-pointer transition ${
            isActive ? "text-[#30B0C7]" : "hover:text-[#30B0C7]"
          }`}
          onClick={() => {
            setActiveItem(label);
            scrollToSection(label);
          }}
        >
          {label}
        </div>
      )}
    </>
  );
};

export default NavbarItem;
