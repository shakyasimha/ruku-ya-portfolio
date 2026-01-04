"use client";

import { useLanguage } from "@/lib/languageContext";
import { useState } from "react";

const languageLabels = {
  en: "EN",
  ne: "ने",
  new: "𑐣𑐾",
};

const languageOrder: ("en" | "ne" | "new")[] = ["en", "ne", "new"];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const handleClick = () => {
    const currentIndex = languageOrder.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languageOrder.length;
    setLang(languageOrder[nextIndex]);
  };

  return (
    <button
      className="mx-2 my-2 px-2 py-2 rounded-xl bg-[#f7f7f7] text-gray-700 font-medium hover:bg-gray-400 hover:text-[#f7f7f7] transition duration-500"
      onClick={handleClick}
    >
      {languageLabels[lang]}
    </button>
  );
}
