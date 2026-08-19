export default function Banner() {
    return (
        <>
            <section className="relative min-h-screen overflow-hidden">
                {/* vide background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/video/bg-video-cc.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent z-0 pointer-events-none"></div>

                <div className="container mx-auto relative z-20 h-full flex flex-col justify-between pt-30 pb-20 md:pt-60 md:pb-40">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
                        {/* title coding collective */}
                        <h1 className="text-5xl md:text-[70px] font-bold text-white tracking-tight animate-fade-up [animation-delay:200ms] will-change-transform">
                            Coding Collective
                            <span className="text-[#FFC700] ml-2 text-4xl md:text-6xl align-top">®</span>
                        </h1>

                        <div className="text-white font-bold text-xl md:text-[40px] flex items-center justify-center md:justify-start min-h-10 md:min-h-12.5 gap-2 my-auto">
                            <span>IT Community</span>
                            <span className="inline-block ml-1 w-1 md:w-1.5 h-[1.2em] bg-[#FFC700] animate-pulse"></span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left gap-8 mt-auto w-full">
                        <div className="max-w-3xl flex flex-col items-center md:items-start w-full">
                            <p className="text-gray-300 text-lg md:text-[20px] leading-relaxed mb-8 animate-fade-up [animation-delay:400ms] will-change-transform">
                                Your Go-To Hub for Custom Software &amp; Scalable Tech Teams <br />
                                We help businesses build reliable software and scale tech teams <br />
                                efficiently to support long-term growth.
                            </p>
                        </div>

                    </div>

                </div>


            </section>
        </>
    )
}