"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="mx-2 my-2 px-2 py-2 rounded-xl bg-[#f7f7f7] text-gray-700 font-medium hover:bg-gray-400 hover:text-[#f7f7f7] transition duration-500"
      onClick={() => setIsOpen(!isOpen)}
    >
      EN
    </button>
  );
}
