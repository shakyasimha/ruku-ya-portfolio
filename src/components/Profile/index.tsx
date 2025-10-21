import Image from "next/image";
import Link from "next/link";
import { alegreyaSC, nithyaRanjana, notoSerifDevanagari } from "@/ui/fonts";

// interface HeaderProps {
//     title: string;
// }

// What I can do here is, assign title as per the langauge/locale of the website and change the title accordingly.
const title = {
  en: {
    text: "I am Rukshana Kapali.",
    font: alegreyaSC.className,
  },
  ne: {
    text: "म रुक्शना कपाली हुँ।",
    font: notoSerifDevanagari.className,
  },
  new: {
    text: "जि रुक्शना कपाली खः।",
    font: nithyaRanjana.className,
  },
};

export default function Profile() {
  return (
    <div className="flex flex-col bg-[#f7f7f7] md:flex-row items-center mt-64 px-4 w-full max-w-4xl mx-auto">
      {/* Profile picture - appears first on mobile, second on desktop */}
      <div className="relative flex-shrink-0 w-50 h-50 rounded-3xl overflow-hidden border-4 border-white mx-auto md:mx-0 z-10 md:order-2">
        <Image
          src="/rukshana-1-copy.jpg"
          alt="rukshana profile picture"
          fill
          className="object-cover"
        />
      </div>

      {/* Title - appears second on mobile, first on desktop */}
      <div className="flex flex-col items-center justify-between w-full mt-4 md:mt-8 md:order-1">
        <div className="text-center md:text-left">
          <h1 className={`${title["new"].font} text-4xl`}>
            <strong>{title["new"].text}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}
