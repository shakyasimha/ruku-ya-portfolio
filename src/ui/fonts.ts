import {
  Alegreya_Sans,
  Alegreya_Sans_SC,
  Noto_Serif_Devanagari,
  Roboto,
  Lato,
  Noto_Sans_Newa,
} from "next/font/google";

import localFont from "next/font/local";

// Fonts
export const nithyaRanjana = localFont({
  src: [
    {
      path: "../../public/fonts/NithyaRanjanaDU-Regular.otf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "/fonts/NithyaRDanjana-Bold.otf",
    //   weight: "700",
    // },
  ],
});

export const alegreyaSans = Alegreya_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const alegreyaSC = Alegreya_Sans_SC({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const newaLipi = Noto_Sans_Newa({
  weight: ["400"],
  subsets: ["newa"],
});

export const notoSerifDevanagari = Noto_Serif_Devanagari({
  weight: ["400", "500", "700"],
  subsets: ["devanagari"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
});

export const lato = Lato({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700", "900"],
});
