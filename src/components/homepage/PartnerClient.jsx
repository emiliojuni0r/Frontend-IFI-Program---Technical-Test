import React from "react";

// Data dummy (Template Teks)
const row1Partners = Array.from({ length: 8 }, (_, i) => `Partner ${i + 1}`); // Partner 1 - 8
const row2Partners = Array.from({ length: 8 }, (_, i) => `Partner ${i + 9}`); // Partner 9 - 16
const row3Partners = Array.from({ length: 8 }, (_, i) => `Partner ${i + 17}`); // Partner 17 - 24

// Komponen Reusable untuk setiap baris Marquee
const MarqueeRow = ({ items, direction }) => {
    const isLeft = direction === "left";
    const animationClass = isLeft ? "animate-marquee-left" : "animate-marquee-right";

    return (
        <div className="flex overflow-hidden group">
            <div className={`flex w-max items-center gap-4 ${animationClass}`}>
                {/* Array digandakan [...items, ...items] agar scroll infinte-nya nyambung */}
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="group/item relative flex items-center justify-center w-36 md:w-56 h-12 md:h-16 shrink-0 transition-transform duration-300 cursor-pointer bg-[#E5E5E5] rounded-full hover:scale-110"
                    >
                        <span className="font-bold text-gray-500 transition-colors duration-300 group-hover/item:text-black">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function PartnerClient() {
    return (
        <div className="relative bg-black bg-[url('/images/bg-clients.png')] bg-contain bg-center bg-no-repeat px-5 md:px-0 py-20">
            {/* Custom CSS untuk Animasi */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    .animate-marquee-left {
                        animation: marquee-left 45s linear infinite;
                    }
                    .animate-marquee-right {
                        animation: marquee-right 45s linear infinite;
                    }
                    .group:hover .animate-marquee-left,
                    .group:hover .animate-marquee-right {
                        animation-play-state: paused;
                    }
                    @keyframes marquee-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marquee-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                `
            }} />

            <section className="relative">
                {/* Header */}
                <div className="mb-16 container mx-auto">
                    <div className="flex items-center gap-3">
                        <h2 className="text-4xl md:text-[40px] font-extrabold text-white mb-4 tracking-tight">
                            Our Partner & Clients<span className="text-[#FFC700]">.</span>
                        </h2>
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="flex flex-col gap-4 md:gap-6 w-full relative z-10 overflow-hidden">
                    {/* Baris 1 - Scroll Kiri */}
                    <MarqueeRow items={row1Partners} direction="left" />

                    {/* Baris 2 - Scroll Kanan */}
                    <MarqueeRow items={row2Partners} direction="right" />

                    {/* Baris 3 - Scroll Kiri */}
                    <MarqueeRow items={row3Partners} direction="left" />
                </div>
            </section>
        </div>
    );
}