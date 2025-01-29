import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-sm cursor-pointer hover:text-[#30B0C7] transition">
      {label}
    </div>
  );
};

export default NavbarItem;
