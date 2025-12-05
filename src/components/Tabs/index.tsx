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

type langProps = {
  lang?: "en" | "ne" | "new";
};

export default function Tabs({ lang = "en" }: langProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      icon: GraduationCap,
      label: {
        en: "Academics",
        ne: "शिक्षा",
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
      content: "Awards content here",
    },
  ];

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon; // Extract icon component
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 flex md:flex-col items-center gap-2 transition-colors transition-800 ${
                activeTab === tab.id
                  ? "text-gray-800"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon className="w-5 h-5" /> {/* Render as component */}
              <span>{tab.label[lang]}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6">{tabs[activeTab].content}</div>
    </div>
  );
}
