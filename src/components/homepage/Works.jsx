"use client";

import Image from "next/image";
import { lazy } from "react";

export default function Works() {
    return (<>
        <div className="bg-black py-20">
            <div className="container mx-auto px-5 md:px-0">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-[40px] font-extrabold text-white mb-4 tracking-tight">WORKS<span className="text-[#FFC700]">.</span></h2>
                    <p className="text-white text-base mb-8">
                        We've helped businesses across industries achieve their goals. Here are some of our recent projects.
                    </p>
                </div>
                {/* start of grid work */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
                            <Image src={"/example/tmii.webp"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width={700} height={500} alt="tmi" loading="lazy" />
                        </div>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
                            <Image src={"/example/tmii.webp"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width={700} height={500} alt="tmi" loading="lazy" />
                        </div>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
                            <Image src={"/example/tmii.webp"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width={700} height={500} alt="tmi" loading="lazy" />
                        </div>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
                            <Image src={"/example/tmii.webp"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width={700} height={500} alt="tmi" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}