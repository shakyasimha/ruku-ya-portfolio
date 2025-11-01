"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems: NavItem[];
};

export default function Navbar({ navItems }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    closeMenu();

    const element = document.getElementById(href);
    if (element) {
      const navbarHeight = 64; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-[#f7f7f7] z-50">
        <div className="max-w-4xl mx-auto w-full px-4">
          <ul className="flex items-center justify-center gap-8 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-gray-700 hover:text-red-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Language switcher right next to links */}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-[#f7f7f7] z-50">
        <div className="flex justify-end items-center px-4 py-4">
          {/* Language switcher */}
          <LanguageSwitcher />

          {/* Burger Icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 px-8 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={`#${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-lg text-gray-700 hover:text-red-700 transition-colors duration-200 block"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
