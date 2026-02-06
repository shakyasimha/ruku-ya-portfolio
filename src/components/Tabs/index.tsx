"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/languageContext";
import MdxCardDisplay from "@/components/MdxCardDisplay";

type TabType = {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: {
    en: string;
    ne: string;
    new: string;
  };
  content: string;
  section: null | {
    en: string;
    ne: string;
    new: string;
  };
};

export default function Tabs({ tabs }: { tabs: TabType[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const { lang } = useLanguage();

  // Get the section name in the current language
  const currentSection = tabs[activeTab].section;
  const filterSection = currentSection
    ? currentSection[lang] || currentSection.en // Fallback to English if translation missing
    : null;

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
      <MdxCardDisplay
        section={tabs[activeTab].content}
        filterSection={filterSection}
      />
    </div>
  );
}
