import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
    return (<>
        <div className="w-full h-screen flex flex-col justify-center px-6 md:px-12">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-6xl md:text-[90px] font-bold text-white leading-none tracking-tight mb-10">
                        How <br />
                        We Work <span className="text-[#FFC700]">.</span>
                    </h2>
                    <p className="text-xl text-white">
                        A Structured and Collaborative Delivery Approach
                    </p>
                </div>
                <div className="w-full">
                    <div className="bg-[#232323] rounded-[10px] w-full p-10 md:p-20 flex items-center justify-center">

                    </div>
                </div>
            </div>
        </div>

        <div className="relative w-full h-125 md:h-175 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src={"/example/bg-specialist.webp"} alt="bg web specialist" fill loading="lazy" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/4 to-transparent z-1 pointer-events-none"></div>
            </div>
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-[50px] font-bold text-white mb-10 tracking-tight">
                    Speak with a Specialist
                </h2>
                <p className="text-white text-base md:text-[20px] mx-auto mb-10 leading-relaxed font-light">
                    Book a complimentary consultation with an experienced specialist. Schedule a meeting today.
                </p>
                <Link href={"/contact"} className="relative group overflow-hidden inline-block bg-[#FFC700] text-black text-base px-10 py-3 rounded-lg shadow-xl transition-colors duration-300 ease-out border-2 border-[#FFC700]">
                    Contact Us
                </Link>
            </div>
        </div>
    </>)
}