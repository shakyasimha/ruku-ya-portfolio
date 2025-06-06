import Link from 'next/link';
import { Alegreya_Sans, Alegreya_Sans_SC, Noto_Sans_Newa, Noto_Serif_Devanagari } from "next/font/google";

// Fonts 
const alegreyaSans = Alegreya_Sans({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

const alegreyaSC = Alegreya_Sans_SC({ 
    weight: ['500', '700'],
    subsets: ['latin'],
});

const newaLipi = Noto_Sans_Newa({
    weight: ['400'], 
    subsets: ['newa']
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
    weight: ['400', '500', '700'],
    subsets: ['devanagari']
});

interface FooterProps {
    locationHeader: string, 
    location: string, 
    emailHeader: string, 
    email: string, 
    contactHeader: string, 
    contact: string
}

export default function Footer() {
    return(
        <footer className="text-[#333] py-6"> 
            
        </footer>
    );
}