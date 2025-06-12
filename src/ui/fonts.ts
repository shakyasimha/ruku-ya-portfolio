import { Alegreya_Sans, Alegreya_Sans_SC, Noto_Sans_Newa, Noto_Serif_Devanagari, Roboto  } from "next/font/google";

// Fonts 
export const alegreyaSans = Alegreya_Sans({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

export const alegreyaSC = Alegreya_Sans_SC({ 
    weight: ['500', '700'],
    subsets: ['latin'],
});

export const newaLipi = Noto_Sans_Newa({
    weight: ['400'], 
    subsets: ['newa']
});

export const notoSerifDevanagari = Noto_Serif_Devanagari({
    weight: ['400', '500', '700'],
    subsets: ['devanagari']
});

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});