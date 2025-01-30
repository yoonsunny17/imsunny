import React from "react";
import CategoryTitle from "../common/CategoryTitle";
import { resumeData } from "@/data/resumeData";

import { SiNotion, SiGithub } from "react-icons/si";

interface ProjectInfoProps {
  title: string;
  period: string;
  notion?: string;
  github?: string;
  details: {
    organizer: string;
    infos: string[];
    skill: string;
    mainFeatures?: string[];
    roles: string[];
    whatILearned?: string[];
  }[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  title,
  period,
  notion,
  github,
  details,
}) => {
  return (
    <div className="mb-8">
      {/* period & title */}
      <div className="flex items-baseline mb-4 gap-8 text-lg lg:text-xl">
        <span className="text-[#808080] w-40 lg:w-44 text-right">{period}</span>
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-bold">{title}</h1>
          <div className="flex flex-row gap-2">
            {notion && (
              <a
                href={notion}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
              >
                <SiNotion className="w-5 h-5" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* project detail */}
      <div className="flex flex-col gap-8">
        {details.map((detail, idx) => (
          <div key={idx} className="flex flex-row gap-8">
            <p className="w-44 text-right text-sm text-[#808080] font-semibold"></p>

            <div className="flex flex-col text-sm gap-2 w-4/5 lg:w-2/3">
              <h3 className="text-[#808080] font-semibold">
                {detail.organizer}
              </h3>

              {/* role detail */}
              <ul className="text-gray-700 space-y-6 list-disc list-inside">
                {/* info */}
                <li>
                  Info
                  <ul className="list-disc list-inside ps-5 mt-2">
                    {detail.infos.map((info, idx) => (
                      <li key={idx}>{info}</li>
                    ))}
                    <li>
                      Skills
                      <ul className="list-disc list-inside ps-5 mt-2">
                        <li>{detail.skill}</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* main feature */}
                {detail.mainFeatures && (
                  <li>
                    Main feature
                    <ul className="list-disc list-inside ps-5 mt-2">
                      {detail.mainFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </li>
                )}

                {/* role */}
                <li>
                  Role
                  <ul className="list-disc list-inside ps-5 mt-2">
                    {detail.roles.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </li>

                {/* what i learned */}
                {detail.whatILearned && (
                  <li>
                    What I Learned
                    <ul className="list-disc list-inside ps-5 mt-2">
                      {detail.whatILearned.map((learned, idx) => (
                        <li key={idx}>{learned}</li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="PROJECTS" className="scroll-mt-32 flex flex-col gap-8">
      <CategoryTitle title="PROJECTS" />
      <div className="flex flex-col lg:gap-8 border-l-2 border-gray-200 pl-6">
        {resumeData.projects.map((project, idx) => (
          <ProjectInfo key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
