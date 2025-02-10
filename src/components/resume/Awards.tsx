import React from "react";
import CategoryTitle from "../common/CategoryTitle";
import { resumeData } from "@/data/resumeData";
import clsx from "clsx";

interface AwardInfoProps {
  title: string;
  period: string;
  organizer: string;
  summary: string;
}

const AwardInfo: React.FC<AwardInfoProps> = ({
  title,
  period,
  organizer,
  summary,
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
            <ul className="list-disc list-inside">
              <li className="text-themeText text-sm">{summary}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const AwardSection = () => {
  return (
    <section id="OTHERS" className="scroll-mt-32 flex flex-col gap-8">
      <CategoryTitle title="AWARDS" />
      <div className="flex flex-col gap-8 md:border-l-2 border-themeText-border md:pl-6">
        {resumeData.awards.map((award, idx) => (
          <React.Fragment key={idx}>
            <AwardInfo {...award} />
            <hr
              className={clsx(
                "md:hidden",
                idx === resumeData.awards.length - 1 ? "hidden" : ""
              )}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
