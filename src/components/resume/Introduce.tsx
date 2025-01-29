import React from "react";
import CategoryTitle from "../common/CategoryTitle";
import { resumeData } from "@/data/resumeData";

const IntroduceSection = () => {
  return (
    <section id="INTRODUCE" className="scroll-mt-32 flex flex-row gap-20">
      <CategoryTitle title="INTRODUCE" />
      <div className="flex flex-col gap-4">
        {resumeData.introduce.descriptions.map((description, idx) => (
          <p key={idx} className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        ))}
      </div>
    </section>
  );
};

export default IntroduceSection;
