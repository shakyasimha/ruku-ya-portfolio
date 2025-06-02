import Image from 'next/image';
import { Alegreya_Sans, Alegreya_Sans_SC } from "next/font/google";

// Fonts 
const alegreyaSans = Alegreya_Sans({
    weight: ['400', '500', '700'],
    subsets: ["latin"],
});

const alegreyaSC = Alegreya_Sans_SC({ 
    weight: ['500', '700'],
    subsets: ["latin"],
});

interface HeaderProps {
    title: string
};

export default function Page({ title }: HeaderProps) {
    return(
        <div className="flex flex-col">
            {/* Cover photo */}
            <div className="w-full h-64 relative">
                <Image 
                    src="/cover-image-1.jpg"
                    alt="generic cover image"
                    fill
                    className="object-cover"
                />
            </div>
        
            {/* Profile picture, title, etc. */}
            <div className="flex flex-col md:flex-row items-center mt-[-4rem] px-4 w-full max-w-4xl mx-auto">
                {/* Profile picture */}
                <div className="relative flex-shrink-0 w-60 h-60 rounded-full overflow-hidden border-4 border-white mx-auto md:mx-0 z-10">
                    <Image
                        src="/rukshana-1-copy.jpg"
                        alt="rukshana profile picture"
                        fill
                        className="object-cover"
                    />
                </div>
        
                {/* Client name, client description and contact buttons */}
                <div className="flex flex-col items-center justify-between w-full mt-4 md:mt-8">
                    <div className="text-center md:text-left md:ml-8 md:mt-4">
                        <h1 className={`${alegreyaSC.className} text-3xl font-bold`}>{title}</h1>
                        {/* <p className={`${alegreyaSans.className} text-xl text-[#333]`}>{headerInfo.subtitle}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}