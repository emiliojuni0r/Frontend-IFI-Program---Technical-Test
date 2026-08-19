"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ menus }) {
    const pathname = usePathname();

    return (
        <>
            <div className="md:flex space-x-20">
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
        </>
    )
}