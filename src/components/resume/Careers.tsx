import React from "react";
import CategoryTitle from "../common/CategoryTitle";
import { resumeData } from "@/data/resumeData";

interface CareerInfoProps {
  company: string;
  period: string;
  details: {
    period: string;
    summary: string;
    responsibilities: string[];
  }[];
}
const CareerInfo: React.FC<CareerInfoProps> = ({
  company,
  period,
  details,
}) => {
  return (
    <div className="md:mb-8">
      {/* period & company */}
      <div className="flex items-baseline mb-4 gap-2 md:gap-8 lg:text-xl">
        <span className="text-themeText w-40 lg:w-44 md:text-right">
          {period}
        </span>
        <h1 className="font-bold text-themeText-title">{company}</h1>
      </div>

      {/* career detail */}
      <div className="flex-col gap-8 hidden md:block space-y-6">
        {details.map((info, idx) => (
          <div key={idx} className="flex flex-row gap-8">
            <p className="w-44 text-right text-sm text-themeText font-semibold">
              {info.period}
            </p>
            <div className="flex flex-col text-sm gap-2 md:w-2/3">
              <h3 className="text-themeText font-semibold">{info.summary}</h3>

              {/* responsibilites detail */}
              <ul className="text-themeText space-y-1 list-disc list-inside">
                {info.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CareerSection = () => {
  return (
    <section id="CAREERS" className="scroll-mt-32 flex flex-col gap-8">
      <CategoryTitle title="CAREERS" />
      <div className="flex flex-col gap-8 md:border-l-2 border-themeText-border md:pl-6">
        {resumeData.careers.map((career, idx) => (
          <CareerInfo key={idx} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
