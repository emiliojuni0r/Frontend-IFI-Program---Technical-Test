"use client"
import Image from "next/image";

export default function BannerCommunity() {
    return (<>
    <div className="relative w-full h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden py-20">
        <div className="relative w-full z-10 flex flex-col justify-center items-center h-full">
            <div className="flex items-center justify-center pt-30 md:pt-40">
                <h1 className="text-3xl md:text-[50px] font-bold text-center leading-tight animate-fade-up [animation-delay:100ms] will-change-transform">
                    Powered by a Growing Tech Ecosystem
                </h1>
            </div>
            <div className="relative w-full h-full mt-auto">
                 <Image src={'/example/bg-comunity.webp'} fill alt="community bg" loading="lazy" />
            </div>
        </div>
    </div>
    </>)
}