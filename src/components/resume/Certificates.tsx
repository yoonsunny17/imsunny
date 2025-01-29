import React from "react";
import CategoryTitle from "../common/CategoryTitle";
import { resumeData } from "@/data/resumeData";

interface CertificateInfoProps {
  title: string;
  period: string;
  organizer: string;
}

const CertificateInfo: React.FC<CertificateInfoProps> = ({
  title,
  period,
  organizer,
}) => {
  return (
    <div className="mb-8">
      {/* period & title */}
      <div className="flex items-baseline mb-4 gap-8 text-xl">
        <span className="text-[#808080] w-44 text-right">{period}</span>
        <h1 className="font-bold">{title}</h1>
      </div>

      {/* organizer & summary */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <p className="w-44 text-right text-sm text-[#808080] font-semibold"></p>
          <div className="flex flex-col text-sm gap-2">
            <h3 className="text-[#808080] font-semibold text-sm">
              {organizer}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificateSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <CategoryTitle title="CERTIFICATES" />
      <div className="flex flex-col gap-8 border-l-2 border-gray-200 pl-6">
        {resumeData.certificates.map((certificate, idx) => (
          <CertificateInfo key={idx} {...certificate} />
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
