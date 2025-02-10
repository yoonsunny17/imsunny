import React from "react";
import CategoryTitle from "../common/CategoryTitle";
import { resumeData } from "@/data/resumeData";
import clsx from "clsx";

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
    <div className="md:mb-8">
      {/* period & title */}
      <div className="flex items-baseline mb-4 gap-2 md:gap-8 lg:text-xl">
        <span className="text-themeText w-40 lg:w-44 md:text-right">
          {period}
        </span>
        <h1 className="font-bold text-themeText-title">{title}</h1>
      </div>

      {/* organizer & summary */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <p className="hidden md:block w-44 text-right text-sm text-themeText font-semibold"></p>
          <div className="flex flex-col text-sm gap-2">
            <h3 className="text-themeText font-semibold text-sm">
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
      <div className="flex flex-col gap-8 md:border-l-2 border-themeText-border md:pl-6">
        {resumeData.certificates.map((certificate, idx) => (
          <>
            <CertificateInfo key={idx} {...certificate} />
            <hr
              className={clsx(
                "md:hidden",
                idx === resumeData.certificates.length - 1 ? "hidden" : ""
              )}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
