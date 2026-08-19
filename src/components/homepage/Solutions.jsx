import SolutionOrbit from "./SolutionOrbit";

export default function Solutions() {
    return (<>
        <div className="relative w-full min-h-screen bg-black overflow-hidden font-sans flex flex-col items-center justify-between antialiased">
            <div className="absolute top-10 w-full flex items-center justify-center pt-8 z-30">
                <h2 className="text-4xl md:text-[40px] font-extrabold text-white mb-6 tracking-tight">SOLUTIONS<span className="text-[#FFC700]">.</span></h2>
            </div>

            <SolutionOrbit />
        </div>
    </>)
}