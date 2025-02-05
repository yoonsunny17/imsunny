import React from "react";
import CategoryTitle from "../common/CategoryTitle";
import { resumeData } from "@/data/resumeData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import clsx from "clsx";

interface GuideLineProps {
  score: number;
  text: string;
}

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    score: number;
  }[];
}

const GuideLine: React.FC<GuideLineProps> = ({ score, text }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div
        className={clsx(
          "bg-opacity-30 w-8 h-3",
          score === 3
            ? "bg-[#FF3a30] bg-opacity-30 dark:bg-transparent dark:border-2 dark:border-[#1BCEDF]"
            : score === 2
            ? "bg-[#FFCC00] bg-opacity-30 dark:bg-transparent dark:border-2 dark:border-[#5B247A]"
            : "bg-[#D9D9D9] bg-opacity-50 dark:bg-transparent dark:border-2 dark:border-zinc-700"
        )}
      />
      <p className="text-xs text-themeText-guide">{text}</p>
    </div>
  );
};

const badgeColor = (score: number) => {
  if (score === 1) {
    return "bg-[#D9D9D9] bg-opacity-50 dark:bg-transparent dark:border-2 dark:border-zinc-700";
  } else if (score === 2) {
    return "bg-[#FFCC00] bg-opacity-30 dark:bg-transparent dark:border-2 dark:border-[#5B247A]";
  } else {
    return "bg-[#FF3a30] bg-opacity-30 dark:bg-transparent dark:border-2 dark:border-[#1BCEDF]";
  }
};

const TooltipBtn = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className="block lg:hidden">
          <button>
            <AiOutlineQuestionCircle />
          </button>
        </TooltipTrigger>
        <TooltipContent className="bg-zinc-900">
          <div className="flex flex-col gap-1">
            <GuideLine
              score={3}
              text="꾸준한 실무 경험이 존재하고, 서비스 환경에 맞는 코드 구현이 가능함"
            />
            <GuideLine
              score={2}
              text="서비스 기능 구현이 가능하나, 심화 기능 구현을 위한 추가적인 학습이
              필요함"
            />
            <GuideLine
              score={1}
              text="구조를 이해하고 기본 기능 구현이 가능함"
            />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="flex flex-row gap-8 items-baseline">
      {/* skill category title */}
      <header className="w-36 text-right lg:text-xl text-themeText">
        {title}
      </header>
      {/* skills */}
      <div className="flex flex-row flex-wrap w-full gap-4 lg:gap-6">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`px-3 py-1 rounded-full text-xs lg:text-sm ${badgeColor(
              skill.score
            )}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillSection = () => {
  return (
    <section id="SKILLS" className="scroll-mt-32 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <CategoryTitle title="SKILLS" />
        <TooltipBtn />

        {/* guideline */}
        <div className="flex-col gap-1 hidden lg:block">
          <GuideLine
            score={3}
            text="꾸준한 실무 경험이 존재하고, 서비스 환경에 맞는 코드 구현이 가능함"
          />
          <GuideLine
            score={2}
            text="서비스 기능 구현이 가능하나, 심화 기능 구현을 위한 추가적인 학습이
              필요함"
          />
          <GuideLine score={1} text="구조를 이해하고 기본 기능 구현이 가능함" />
        </div>
      </div>
      <SkillCategory title="Languages" skills={resumeData.skills.languages} />
      <hr />
      <SkillCategory
        title="Frameworks & Libraries"
        skills={resumeData.skills.frameworksAndLibraries}
      />
      <hr />
      <SkillCategory
        title="Infrastructure & Databases"
        skills={resumeData.skills.infrastructureAndDatabases}
      />
      <hr />
      <SkillCategory title="Tools" skills={resumeData.skills.toolsAndIDEs} />
    </section>
  );
};

export default SkillSection;
