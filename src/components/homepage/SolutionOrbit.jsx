"use client";

import { useEffect, useState } from "react";

const techSolutions = [
    { name: "Digital Transformation", image: "/images/digital-transformation.png" },
    { name: "Cloud & Infrastructure Management", image: "/images/cim.png" },
    { name: "Data Analytics", image: "/images/data-analytics.png" },
    { name: "Payment Automation Platform", image: "/images/payment-automation.png" },
    { name: "QA & Security Focused", image: "/images/qa-security.png" },
    { name: "Sysadmin as a Service", image: "/images/sysadmin.png" },
];

const talentSolutions = [
    { name: "IT Outsourcing", image: "/images/it-outsourcing.png" },
    { name: "Head Hunting", image: "/images/head-hunting.png" },
    { name: "Project-Based", image: "/images/project-based.png" },
    { name: "IT Community", image: "/images/it-community.png" },
];

function MobileCard({ title, items }) {
    return (
        <div className="flex flex-col xl:hidden w-full max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-white text-2xl font-bold mb-6 text-center border-b border-white/20 pb-4">
                {title}
            </h2>
            <ul className="space-y-4">
                {items.map((item) => (
                    <li key={item.name} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#FFC700] shrink-0 mt-2" />
                        <span className="text-gray-300 text-lg leading-tight font-sans">
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function OrbitItem({
    item,
    index,
    total,
    radius,
    activeIndex,
    setActiveIndex,
    isHovered,
    setIsHovered,
}) {
    const angle = (360 / total) * index;
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;

    const isActive = activeIndex === index;

    return (
        <div
            className="absolute"
            style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
            }}
        >
            {/* Counter rotation - Dijeda jika ada elemen yang di-hover */}
            <div className={`flex items-center justify-center w-[280px] h-[100px] animate-spin-upright ${isHovered ? '[animation-play-state:paused]' : ''}`}>
                <button
                    type="button"
                    onMouseEnter={() => {
                        setActiveIndex(index);
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    onFocus={() => setActiveIndex(index)}
                    className={`
                        flex items-center gap-4 transition-all duration-500 ease-out
                        cursor-pointer pointer-events-auto will-change-transform
                        ${isActive ? "scale-110" : "scale-100"}
                    `}
                >
                    {/* Bulatan kuning tetap menyala saat aktif sebagai penanda */}
                    <div
                        className={`
                            w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-500
                            ${isActive ? "bg-[#FFC700] shadow-[0_0_12px_#FFC700]" : "bg-[#FFC700]"}
                        `}
                    />
                    
                    {/* Warna teks selalu putih */}
                    <span className="leading-tight font-sans max-w-[180px] text-left text-2xl text-white">
                        {item.name}
                    </span>
                </button>
            </div>
        </div>
    );
}

function Orbit({ title, items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    // Titik aktif otomatis berganti setiap 3 detik. Berhenti berputar jika mouse sedang hover.
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                if (prev === null) return 0;
                return (prev + 1) % items.length;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [items.length, isHovered]);

    return (
        <>
            {/* Mobile */}
            <MobileCard title={title} items={items} />

            {/* Desktop */}
            <div className="relative hidden xl:flex items-center justify-center w-[450px] 2xl:w-[600px] h-[450px] 2xl:h-[600px]">
                <div className="absolute w-[800px] h-[800px] flex items-center justify-center scale-[0.6] 2xl:scale-[0.8] origin-center shrink-0">
                    
                    {/* Circle (Tengah hanya berisi text) */}
                    <div 
                        className="relative w-[350px] h-[350px] rounded-full border border-white/40 flex items-center justify-center p-8 z-10"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h2 className="text-white text-3xl md:text-4xl font-bold text-center leading-snug">
                            {title}
                        </h2>
                    </div>

                    {/* Orbit - Dijeda jika di-hover */}
                    <div className={`absolute inset-0 z-20 pointer-events-none animate-spin-orbit ${isHovered ? '[animation-play-state:paused]' : ''}`}>
                        {items.map((item, index) => (
                            <OrbitItem
                                key={item.name}
                                item={item}
                                index={index}
                                total={items.length}
                                radius={300}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                isHovered={isHovered}
                                setIsHovered={setIsHovered}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function SolutionOrbit() {
    return (
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center xl:justify-between px-5 md:px-10 xl:px-16 min-h-screen pt-40 pb-20 relative z-20">
            {/* All-In-One Tech Solution */}
            <div className="w-full xl:w-1/2 flex justify-center xl:justify-start">
                <div className="w-full">
                    <Orbit title="All-In-One Tech Solution" items={techSolutions} />
                </div>
            </div>

            {/* Talent Solution Services */}
            <div className="w-full xl:w-1/2 flex justify-center xl:justify-end mt-10 xl:mt-0">
                <div className="w-full">
                    <Orbit title="Talent Solution Services" items={talentSolutions} />
                </div>
            </div>

            {/* Custom CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes spin-right {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes spin-left {
                        from { transform: rotate(360deg); }
                        to { transform: rotate(0deg); }
                    }
                    .animate-spin-orbit {
                        animation: spin-right 30s linear infinite;
                    }
                    .animate-spin-upright {
                        animation: spin-left 30s linear infinite;
                    }
                `
            }} />
        </div>
    );
}