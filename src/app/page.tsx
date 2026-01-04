"use client";

import {
  alegreyaSans,
  nithyaRanjana,
  notoSansDevanagari,
  notoSerifDevanagari,
  roboto,
} from "@/ui/fonts";

import { Metadata } from "next";
// Importing other Next.js components here
// import { nepalSambat, nepalSambatLatin } from "@/lib/fetchYear";
// import Link from "next/link";
import { useLanguage } from "@/lib/languageContext";

// Importing components here
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import MdxContent from "@/components/MdxContent";
import Tabs from "@/components/Tabs";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Experiences", href: "experiences" },
  { label: "Publications", href: "publication" },
  { label: "Advocacy & Litigation", href: "advocacy" },
];

const headerItems = {
  en: {
    headerFont: alegreyaSans.className,
    aboutSection: "About Me",
    experiencesSection: "My Experiences",
    publicationsSection: "My Publications",
    advocacySection: "Advocacy & Litigation",
  },
  ne: {
    headerFont: notoSerifDevanagari.className,
    aboutSection: "मेरो परिचय",
    experiencesSection: "अनुभव",
    publicationsSection: "प्रकाशन",
    advocacySection: "वकालत र मुद्दाहरू",
  },
  new: {
    headerFont: nithyaRanjana.className,
    aboutSection: "जिगु म्हसिइका",
    experiencesSection: "अनुभव",
    publicationsSection: "प्रकाशन",
    advocacySection: "वकालत र मुद्दाहरू",
  },
};

const font = {
  en: {
    headerFont: alegreyaSans.className,
    bodyFont: roboto.className,
  },
  ne: {
    headerFont: notoSerifDevanagari.className,
    bodyFont: notoSansDevanagari.className,
  },
  new: {
    headerFont: nithyaRanjana.className,
    bodyFont: roboto.className,
  },
};

// Main component
export default function Home() {
  // const year = "N.S. " + nepalSambatLatin(nepalSambat());
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Navbar navItems={navItems} />

      {/* Home section */}
      <div id="home">
        <Profile lang={lang} />
      </div>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        <div className={`${roboto.className} text-center flex-1 md:mr-4 mx-4`}>
          {/* About Me */}
          <div id="about">
            <h2
              className={`${font[lang].headerFont} ${lang == "new" ? "" : "font-bold"} mb-4 text-3xl text-red-700 text-center`}
            >
              {headerItems[lang].aboutSection}
            </h2>

            <div
              className={`${font[lang].bodyFont} prose prose-gray max-w-none text-justify text-gray-700 [&_p]:mb-4`}
            >
              <MdxContent section="about" lang={lang} />
            </div>
          </div>

          {/* Experiences */}
          <div id="experiences">
            <h2
              className={`${font[lang].headerFont} ${lang == "new" ? "" : "font-bold"} mt-8 mb-4 text-3xl text-red-700 text-center`}
            >
              {headerItems[lang].experiencesSection}
            </h2>

            <Tabs lang="en" />
          </div>

          {/* Publications */}
          <div id="publications">
            <h2
              className={`${font[lang].headerFont} ${lang == "new" ? "" : "font-bold"} mt-8 mb-4 text-3xl text-red-700 text-center`}
            >
              {headerItems[lang].publicationsSection}
            </h2>
          </div>

          {/* Advocacy and Litigations */}
          <div id="advocacy">
            <h2
              className={`${font[lang].headerFont} ${lang == "new" ? "" : "font-bold"} mt-8 mb-4 text-3xl  text-red-700 text-center`}
            >
              {headerItems[lang].advocacySection}
            </h2>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer lang={lang} />
    </div>
  );
}
