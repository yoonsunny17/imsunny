import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  label: string;
  setActiveItem: (item: string) => void;
  isActive: boolean;
  pathname: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  setActiveItem,
  isActive,
  pathname,
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {label === "HOME" &&
        (pathname === "/" ? (
          <div
            className="text-sm cursor-pointer transition"
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
          <Link href={"/"}>
            <Image
              src={"/imsunny/images/ImSunny.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
        ))}
      {label !== "HOME" && (
        <div
          className={clsx(
            "text-sm cursor-pointer transition hover:text-[#3079c7]",
            isActive
              ? "text-[#30B0C7] font-bold"
              : "text-themeText hover:text-[#3079c7]",
            pathname !== "/" ? "hidden" : "md:block"
          )}
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
