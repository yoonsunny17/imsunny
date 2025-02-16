import Image from "next/image";
import React from "react";
import Typewriter from "../common/Typewriter";

const ProfileSection = () => {
  return (
    <section
      id="HOME"
      className="scroll-mt-32 flex flex-row gap-[72px] items-center"
    >
      {/* profile image */}
      <Image
        src={"/imsunny/images/profile.png"}
        alt="poster image"
        width={260}
        height={260}
        className="rounded-full hidden lg:block"
      />
      <div className="flex flex-col gap-10">
        {/* title */}
        <Typewriter />
        {/* body */}
        <div className="space-y-2 text-lg text-themeText">
          {/* email */}
          <p className="text-sm">
            <span className="font-bold">Email.</span> jyoonsun0217@gmail.com
          </p>

          {/* github */}
          <p className="text-sm">
            <span className="font-bold">Github.</span>{" "}
            <a
              href="https://github.com/yoonsunny17"
              className="text-[#30B0C7] hover:underline"
            >
              github.com/yoonsunny17
            </a>
          </p>

          {/* blog */}
          <p className="text-sm">
            <span className="font-bold">Blog.</span>{" "}
            <a
              href="https://velog.io/@yoonsunny17"
              className="text-[#30B0C7] hover:underline"
            >
              velog.io/@yoonsunny17
            </a>
          </p>

          {/* phone */}
          <p className="text-sm cursor-default">
            <span className="font-bold">Phone.</span>{" "}
            <span className="bg-gray-200 dark:bg-zinc-800 dark:bg-opacity-70 text-xs text-gray-500 dark:text-zinc-400 px-2 py-1 rounded-full">
              Please contact me by email
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
