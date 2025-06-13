import { alegreyaSans } from "@/ui/fonts";
import Link from "next/link";
interface FooterProps {
    info: {
        headerClassName: string,
        className: string; 
        name: string, 
        profileLink: string, 
        litigationLink: string, 
        publicationLink: string,
        locationHeader: string, 
        location: string, 
        emailHeader: string, 
        email: string, 
        phoneHeader: string, 
        phone: string,
        year: string
    }
}
 
export default function Footer({ info }: FooterProps) {
    return(
        <footer className="text-[#333] py-6"> 
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row w-full items-center">
                {/* Contains name */}
                <div className="flex-1 flex flex-col py-4 gap-2 sm:m-0 m-4">
                    <span className={`${info.headerClassName} text-3xl font-bold text-red-700`}>{info.name}</span>
                </div>

                {/* Contains contact links */}
                <div className={`${info.className} flex-1 flex flex-col py-4 gap-2 sm:m-0 m-4`}>
                    <div className="flex flex-row gap-4">
                        <h2 className="font-bold min-w-[120px]"> {info.locationHeader} </h2>
                        <span> {info.location}</span>
                    </div>
                    
                    <div className="flex flex-row gap-4">
                        <h2 className="font-bold min-w-[120px]"> {info.emailHeader} </h2>
                        <Link 
                            href={`mailto:${info.email}`}
                            className={`${alegreyaSans.className} hover:opacity-60 hover:transition hover:duration-400`}
                        > 
                            {info.email} 
                        </Link>
                    </div>

                    <div className="flex flex-row gap-4">
                        <h2 className="font-bold min-w-[120px]"> {info.phoneHeader} </h2>
                        <span> {info.phone} </span>
                    </div>
                </div>
            </div>

            {/* Divider line */}
            <div className="mx-auto w-1/2 h-[1px] bg-gray-400 mt-6"></div>

            {/* Bottom text */}
            <div className="text-center text-xs mt-4">
                &copy; {info.year}. {info.name}.
            </div>
        </footer>
    );
}