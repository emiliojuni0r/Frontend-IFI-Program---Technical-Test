export default function Service1() {
    return (<>
        <div className="w-full text-white py-24 antialiased">
            <div className="container mx-auto px-5 md:px-0">
                {/* header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#FFC700]"></div>
                        <span className="text-white text-sm md:text-base font-bold tracking-wide">Service 1</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[70px] font-bold tracking-tight">
                        Talent Solution
                        <span className="text-[#FFC700]">.</span>
                    </h2>
                </div>

                {/* start grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFC700]/5 cursor-default">
                        <h3 className="text-base md:text-xl font-bold text-white mb-6">IT Recruitment & Headhunting</h3>
                        <div className="w-full h-0.5 bg-[#FFC700] mb-6"></div>
                        <p className="text-white text-sm md:text-base leading-relaxed mb-6">
                            We help companies hire high-quality technology professionals through a structured recruitment and headhunting process that prioritizes technical capability, cultural fit, and long-term performance.
                        </p>
                        <p className="text-white text-sm md:text-base mb-4 font-medium">
                            What We Deliver:
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-white text-sm md:text-base marker:text-white">
                            <li>Permanent IT recruitment for internal teams</li>
                            <li>Executive and specialist technology headhunting</li>
                            <li>Technical screening and competency assessment</li>
                            <li>Culture fit interviews and hiring advisory</li>
                            <li>Background checks and hiring support</li>
                        </ul>
                    </div>
                    <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFC700]/5 cursor-default">
                        <h3 className="text-base md:text-xl font-bold text-white mb-6">IT Outsourcing</h3>
                        <div className="w-full h-0.5 bg-[#FFC700] mb-6"></div>
                        <p className="text-white text-sm md:text-base leading-relaxed mb-6">
                            Our IT outsourcing services offer businesses immediate access to experienced technology professionals without the overhead of direct employment, enabling faster execution and greater operational flexibility.
                        </p>
                        <p className="text-white text-sm md:text-base mb-4 font-medium">
                            What We Deliver:
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-white text-sm md:text-base marker:text-white">
                            <li>Monthly-based and daily IT outsourcing</li>
                            <li>On-demand developers and technical specialists</li>
                            <li>Mid-term team augmentationt</li>
                            <li>Talent performance monitoring and replacement guarantee</li>
                        </ul>
                    </div>
                    <div className="bg-[#151515] border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FFC700]/5 cursor-default">
                        <h3 className="text-base md:text-xl font-bold text-white mb-6">Project-Based Development</h3>
                        <div className="w-full h-0.5 bg-[#FFC700] mb-6"></div>
                        <p className="text-white text-sm md:text-base leading-relaxed mb-6">
                            We deliver clearly defined digital projects, with full ownership from planning and development through to quality assurance and deployment, managed by experienced internal teams.
                        </p>
                        <p className="text-white text-sm md:text-base mb-4 font-medium">
                            What We Deliver:
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-white text-sm md:text-base marker:text-white">
                            <li>Custom web and mobile application development</li>
                            <li>System integration and internal platforms</li>
                            <li>Digital transformation initiatives</li>
                            <li>MVP and proof-of-concept development</li>
                        </ul>
                    </div>
                </div>
                {/* end grid */}

                <div className="mt-24 flex flex-col items-center">
                    <h2 className="text-white text-center text-base font-bold mb-12">Our Partner</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-28">
                        <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            partner
                        </div>
                        <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            partner
                        </div>
                        <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            partner
                        </div>
                        <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            partner
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}