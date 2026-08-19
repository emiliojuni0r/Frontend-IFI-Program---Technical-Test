"use client"
import { useState } from "react";

export default function Faq() {
    const faqData = [
        {
            question: "What does Coding Collective do?",
            answer: "Coding Collective is a 360 digital solutions partner that helps organizations design, build, and optimize digital systems—from software development to technology operations.",
        },
        {
            question: "Who do we work with?",
            answer: "We work with startups, SMEs, enterprises, and government institutions seeking reliable digital solutions and long-term technology partners.",
        },
        {
            question: "What services does Coding Collective provide?",
            answer: "Our main service is end-to-end digital solutions, including custom software development, system integration, and digital platforms. IT recruitment and tech talent outsourcing are provided as a secondary service to support our clients’ digital growth.",
        },
        {
            question: "How does the collaboration process work?",
            answer: "We start by understanding your business objectives, then propose the most suitable digital solution or team setup. Coding Collective supports the process with structured communication, execution, and quality control.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        // Jika item yang diklik sudah terbuka, tutup (set ke null).
        // Jika belum terbuka, jadikan item tersebut yang aktif.
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (<>
        <div className="bg-[#080808] py-20">
            <div className="container mx-auto px-5 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
                    {/* left side */}
                    <div className="lg:col-span-4 top-24">
                        <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6 tracking-tight">FAQ<span className="text-[#FFC700]">.</span></h2>
                        <p className="text-gray-300 text-base leading-relaxed max-w-sm">Curious about how we work? You'll find all the answers you need right here.</p>
                    </div>
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        <div className="lg:col-span-8 flex flex-col gap-4">
                            {faqData.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className="bg-[#232323] rounded-2xl overflow-hidden transition-colors duration-300"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                                        >
                                            <span
                                                className={`text-base transition-colors duration-300 ${isOpen ? "text-[#FFC700]" : "text-white"
                                                    }`}
                                            >
                                                {faq.question}
                                            </span>

                                            <span className="ml-4 shrink-0">
                                                <svg
                                                    className={`w-6 h-6 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180 text-[#FFC700]" : "rotate-0 text-gray-400"
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-6 pb-6 pt-2 text-gray-400 text-base leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}