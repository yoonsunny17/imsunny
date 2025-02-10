import React from "react";
import CategoryTitle from "../common/CategoryTitle";
import { resumeData } from "@/data/resumeData";
import clsx from "clsx";

const IntroduceSection = () => {
  return (
    <section
      id="INTRODUCE"
      className="scroll-mt-32 flex flex-col lg:flex-row gap-8 lg:gap-20"
    >
      <CategoryTitle title="INTRODUCE" />
      <div className="flex flex-col gap-4">
        {resumeData.introduce.descriptions.map((description, idx) => (
          <p
            key={idx}
            className={clsx(
              "text-sm text-themeText leading-relaxed sm:block",
              idx !== 2 ? "hidden" : ""
            )}
          >
            {description}
          </p>
          // <p key={idx} className="text-sm text-themeText leading-relaxed">
          //   {description}
          // </p>
        ))}
      </div>
    </section>
  );
};

export default IntroduceSection;
