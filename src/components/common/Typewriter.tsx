"use client";

import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const basePhrase = "Hello, I'm ";

  const [currPhrase, setCurrPhrase] = useState(""); // 현재 화면에 보이는 문구
  const [phraseIdx, setPhraseIdx] = useState(0); // 현재 타이핑 중인 문구 인덱스
  const [isDeleting, setIsDeleting] = useState(false); // 삭제 중인지 확인

  useEffect(() => {
    // 반복해서 나올 문구들
    const phrases = [
      "Yoon Sun",
      "Frontend Developer",
      "Crafting User Experiences",
      "Passionate Communicator",
      "Eager to Learn",
      "Creative Thinker",
    ];

    const handleTyping = () => {
      const fullPhrase =
        basePhrase + (isDeleting ? basePhrase : "") + phrases[phraseIdx];
      const currLength = currPhrase.length;

      // 타이핑 완료했으면, 기다렸다가 삭제 단계 진행
      if (!isDeleting && currLength === fullPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      // 삭제 완료했으면, 그 다음 문구로 넘어가기
      if (isDeleting && currLength === basePhrase.length) {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
        return;
      }

      const nextPhrases = isDeleting
        ? currPhrase.slice(0, -1)
        : fullPhrase.slice(0, currLength + 1);

      setCurrPhrase(nextPhrases);
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currPhrase, isDeleting, phraseIdx]);

  return (
    <div className="hidden lg:block text-3xl text-[#374151] font-bold cursor-default dark:bg-gradient-to-r dark:from-[#5B247A] dark:to-[#1BCEDF] dark:bg-clip-text dark:text-transparent">
      {/* <div className="hidden sm:block sm:text-lg md:text-2xl lg:text-4xl text-[#374151] font-bold cursor-default dark:bg-gradient-to-r dark:from-[#5B247A] dark:to-[#1BCEDF] dark:bg-clip-text dark:text-transparent"> */}
      {currPhrase}
      <span className="animate-blink dark:text-[#1BCEDF]">|</span>
    </div>
  );
};

export default Typewriter;
