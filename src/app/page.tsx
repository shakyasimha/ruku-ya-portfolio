// Font imports here
import {
  alegreyaSans,
  nithyaRanjana,
  notoSerifDevanagari,
  roboto,
} from "@/ui/fonts";

// Importing other Next.js components here
// import { nepalSambat, nepalSambatLatin } from "@/lib/fetchYear";
import Link from "next/link";

// Importing components here
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import MdxContent from "@/components/MdxContent";

// Metadata
export const metadata = {
  title: "Rukshana Kapali",
};

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
    aboutSection: "मेरो परिचय",
    experiencesSection: "अनुभव",
    publicationsSection: "प्रकाशन",
    advocacySection: "वकालत र मुद्दाहरू",
  },
};

// Main component
export default function Home() {
  // const year = "N.S. " + nepalSambatLatin(nepalSambat());

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Navbar navItems={navItems} />

      {/* Home section */}
      <div id="home">
        <Profile lang="new" />
      </div>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        <div className={`${roboto.className} text-center flex-1 md:mr-4 mx-4`}>
          {/* About Me */}
          <div id="about">
            <h2
              className={`${headerItems["new"].headerFont} mb-4 text-3xl text-red-700 text-center`}
            >
              {headerItems["new"].aboutSection}
            </h2>

            <div>
              <MdxContent section="about" lang="en" />
            </div>
          </div>

          {/* Experiences */}
          <div about="experiences">
            <h2
              className={`${headerItems["new"].headerFont} mt-8 mb-4 text-3xl text-red-700 text-center`}
            >
              {headerItems["new"].experiencesSection}
            </h2>
          </div>

          {/* Publications */}
          <div id="publications">
            <h2
              className={`${headerItems["new"].headerFont} mt-8 mb-4 text-3xl text-red-700 text-center`}
            >
              {headerItems["new"].publicationsSection}
            </h2>
          </div>

          {/* Advocacy and Litigations */}
          <div id="publications">
            <h2
              className={`${headerItems["new"].headerFont} mt-8 mb-4 text-3xl  text-red-700 text-center`}
            >
              {headerItems["new"].advocacySection}
            </h2>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer lang="new" />
    </div>
  );
}
