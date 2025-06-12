import Link from 'next/link';
import Image from 'next/image';
import { alegreyaSans } from "@/ui/fonts";

interface FooterProps {
    info: {
        name: string, 
        profileLink: string, 
        litigationLink: string, 
        publicationLink: string,
        locationHeader: string, 
        location: string, 
        emailHeader: string, 
        email: string, 
        phoneHeader: string, 
        phone: string
    }
}

export default function Footer({ info }: FooterProps) {
    return(
        <footer className={`${alegreyaSans.className}text-[#333] py-6`}> 
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row w-full items-center">
                {/* Contains name */}
                <div className="flex-1 flex flex-col py-4 gap-2 sm:m-0 m-4">
                    <span className="text-2xl font-bold">{info.name}</span>
                </div>

                {/* Contains links */}
                <div className="flex-1 flex flex-col py-4 gap-2 sm:m-0 m-4">
                    Nothing Nothing
                </div>

                {/* Contains contact links */}
                <div className="flex-1 flex flex-col py-4 gap-2 sm:m-0 m-4">
                    <div className="flex flex-row gap-4">
                        <h2 className="font-bold min-w-[120px]"> {info.locationHeader} </h2>
                        <span> {info.location}</span>
                    </div>
                    
                    <div className="flex flex-row gap-4">
                        <h2 className="font-bold min-w-[120px]"> {info.emailHeader} </h2>
                        <span> {info.email} </span>
                    </div>

                    <div className="flex flex-row gap-4">
                        <h2 className="font-bold min-w-[120px]"> {info.phoneHeader} </h2>
                        <span> {info.phone} </span>
                    </div>
                </div>
            </div>

            {/* Divider line */}
            <div className="mx-auto w-[90%] h-[1px] bg-gray-400 mt-6"></div>

            {/* Bottom text */}
            <div className="text-center text-xs mt-4">
                &copy; {new Date().getFullYear()} Rukshana Kapali.
            </div>
        </footer>
    );
}