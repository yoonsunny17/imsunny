import React from "react";

interface CategoryTitleProps {
  title: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ title }) => {
  return <p className="font-bold text-3xl text-[#30B0C7] w-60">{title}</p>;
};

export default CategoryTitle;
