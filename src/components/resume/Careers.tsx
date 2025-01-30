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
    <div className="mb-8">
      {/* period & company */}
      <div className="flex items-baseline mb-4 gap-8 text-lg lg:text-xl">
        <span className="text-[#808080] w-40 lg:w-44 text-right">{period}</span>
        <h1 className="font-bold">{company}</h1>
      </div>

      {/* career detail */}
      <div className="flex flex-col gap-8">
        {details.map((info, idx) => (
          <div key={idx} className="flex flex-row gap-8">
            <p className="w-44 text-right text-sm text-[#808080] font-semibold">
              {info.period}
            </p>
            <div className="flex flex-col text-sm gap-2  w-4/5 lg:w-2/3">
              <h3 className="text-[#808080] font-semibold">{info.summary}</h3>

              {/* responsibilites detail */}
              <ul className="text-gray-700 space-y-1 list-disc list-inside">
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
      <div className="flex flex-col lg:gap-8 border-l-2 border-gray-200 pl-6">
        {resumeData.careers.map((career, idx) => (
          <CareerInfo key={idx} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
