"use client";

import Image from "next/image";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const menus = [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Community", href: "/community" },
        { name: "Contact Us", href: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav
            className={`fixed w-full top-0 z-[999] h-18 transition-all duration-100 ${scrolled
                    ? "bg-black/50 backdrop-blur-xs shadow-lg"
                    : "bg-transparent"
                }`}>
            <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-0 text-white">

                {/* logoo */}
                <Link href={"/"}>
                    <Image src={'/logo/logo_cc.webp'} width={174} height={68} alt="cc logo" />
                </Link>

                {/* menu links */}
                <NavLink menus={menus} />
            </div>
        </nav>
    )
}