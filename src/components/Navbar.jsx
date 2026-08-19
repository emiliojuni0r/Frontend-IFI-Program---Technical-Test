import Image from "next/image";
import NavLink from "./NavLink";

export default function Navbar() {
    const menus = [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Community", href: "/community" },
        { name: "Contact Us", href: "/contact" },
    ];


    return (
        <nav className={`fixed w-full top-0 z-[999] h-18 transition-all duration-300 bg-transparent`}>
            <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-0 text-white">

                {/* logoo */}
                <div className="">
                    <Image src={'/logo/logo_cc.webp'} width={174} height={68} alt="cc logo" />
                </div>

                {/* menu links */}
                <NavLink menus={menus} />
            </div>
        </nav>
    )
}