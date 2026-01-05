"use client";

import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Trophy,
  Languages,
} from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function Tabs() {
  const lang = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      icon: GraduationCap,
      label: {
        en: "Academics",
        ne: "शिक्षा",
        new: "",
      },
      content: "Education content here",
    },
    {
      id: 1,
      icon: Briefcase,
      label: {
        en: "Work Experience",
        ne: "पेशागत अनुभव",
        new: "",
      },
      content: "Work experience content here",
    },
    {
      id: 2,
      icon: Users,
      label: {
        en: "Affiliations",
        ne: "",
        new: "",
      },
      content: "Affiliations content here",
    },
    {
      id: 3,
      icon: Trophy,
      label: {
        en: "Fellowships",
        ne: "",
        new: "",
      },
      content: "Fellowships content here",
    },
    {
      id: 4,
      icon: Award,
      label: {
        en: "Awards",
        ne: "",
        new: "",
      },
      content: "Awards content here",
    },
    {
      id: 5,
      icon: Languages,
      label: {
        en: "Languages",
        ne: "भाषा",
        new: "",
      },
      content: "Language content here",
    },
  ];

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="grid grid-cols-3 md:flex md:justify-center gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 md:px-6 py-3 flex flex-col items-center gap-2 transition-colors ${
                activeTab === tab.id
                  ? "text-gray-800"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6">{tabs[activeTab].content}</div>
    </div>
  );
}
