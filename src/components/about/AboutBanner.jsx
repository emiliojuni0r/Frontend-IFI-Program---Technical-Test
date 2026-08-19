export default function AboutBanner() {
    return (<>
        <section className="relative min-h-screen overflow-hidden">
            {/* vide background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video/about-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent z-0 pointer-events-none"></div>

            <div className="mb-[15vh] relative z-10 flex flex-col items-center pt-60 xl:pt-80 mx-auto">
                <h1 className="text-6xl md:text-[140px] font-bold text-white tracking-tight animate-fade-up [animation-delay:100ms] will-change-transform">
                    ABOUT US
                </h1>
            </div>

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:items-end mx-auto mt-auto pb-16 w-full">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-4xl md:text-[96px] font-extrabold text-white leading-tight animate-fade-up [animation-delay:300ms] will-change-transform">
                        Who <br />
                        We Are
                        <span className="text-[#FFC700]">.</span>
                    </h2>
                </div>
                <div className="text-center md:text-right flex flex-col w-full animate-fade-up [animation-delay:500ms] will-change-transform px-5 md:px-0">
                    <h3 className="text-base md:text-xl text-white mb-6 drop-shadow-lg">
                        A Technology Ecosystem Company Built for Long-Term Impact
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed drop-shadow-md">
                        Coding Collective empowers organizations to scale through Digital Solutions, IT Recruitment, and Tech Community Building. We deliver high-value digital products, connect companies with exceptional tech talent, and cultivate a vibrant and forward-focused technology community.
                    </p>
                </div>
            </div>
        </section>
    </>)
}