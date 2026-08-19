"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavLink({ menus }) {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            {/* desktop */}
            <div className="hidden md:flex items-center space-x-20">
                {menus.map((menu) => (
                    <Link
                        key={menu.href}
                        href={menu.href}
                        className={`transition-colors duration-300 ${pathname === menu.href
                            ? "text-[#FFC700] font-bold"
                            : "text-white hover:text-[#FFC700]"
                            }`}
                    >
                        {menu.name}
                    </Link>
                ))}
            </div>

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <span
                    className={`absolute w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"
                        }`}
                />

                <span
                    className={`absolute w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                        }`}
                />

                <span
                    className={`absolute w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"
                        }`}
                />
            </button>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 z-50 h-screen w-3/4 bg-[#232323] px-8 pt-28 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col gap-8">
                    {menus.map((menu) => (
                        <Link
                            key={menu.href}
                            href={menu.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-xl transition-colors duration-300 ${pathname === menu.href
                                    ? "text-[#FFC700] font-bold"
                                    : "text-white hover:text-[#FFC700]"
                                }`}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    )
}