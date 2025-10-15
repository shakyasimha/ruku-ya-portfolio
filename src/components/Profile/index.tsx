import Image from 'next/image';
import Link from 'next/link';
import { alegreyaSans, alegreyaSC, newaLipi, notoSerifDevanagari } from "@/ui/fonts";

interface HeaderProps {
    title: string;
}

export default function Profile({ title }: HeaderProps) {
    return(
        <div className="flex flex-col bg-[#f7f7f7] md:flex-row items-center mt-64 px-4 w-full max-w-4xl mx-auto">
                {/* Profile picture - appears first on mobile, second on desktop */}
                <div className="relative flex-shrink-0 w-60 h-60 rounded-3xl overflow-hidden border-4 border-white mx-auto md:mx-0 z-10 md:order-2">
                    <Image
                        src="/rukshana-1-copy.jpg"
                        alt="rukshana profile picture"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Title - appears second on mobile, first on desktop */}
                <div className="flex flex-col items-center justify-between w-full mt-4 md:mt-8 md:order-1">
                    <div className="text-center md:text-left md:ml-4 md:mt-4">
                        <h1 className={`${alegreyaSC.className} text-4xl font-bold`}><strong>{title}</strong></h1>
                    </div>
                </div>
        </div>
    );
}