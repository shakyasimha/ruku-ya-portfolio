// @/components/Navbar
"use client";

import Link from "next/link";
import { lato } from "@/ui/fonts";

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    navItems: NavItem[];
}

export default function Navbar({ navItems }: NavbarProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if(element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-[#f7f7f7] text-gray-800 p-4 z-50">
            <ul className={`${lato.className} flex justify-center gap-8`}>
                {navItems.map((item) => (
                    <li key={item.href}> 
                        <Link
                            href={`#${item.href}`}
                            onClick={(e)=>handleClick(e, item.href)}
                            className="hover:text-gray-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}