export default function Milestones() {
    return(<>
    <div className="relative h-[400vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-[url('/images/ellipse.png')] bg-contain bg-left bg-no-repeat pointer-events-none z-0 opacity-60">
            </div>
            <div className="mb-12 md:mb-20 text-center w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <h2 className="text-4xl md:text-[70px] font-bold text-white tracking-tight">Milestones <span className="text-[#FFC700]">.</span></h2>
            </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full flex justify-center md:justify-end border-b md:border-b-0 border-[#FFC700] pb-8 md:pb-0" style={{ height: "400px" }}>
                <div className="flex items-center h-full">
                    <div className="flex flex-col justify-center h-full transition-opacity duration-300">
                        <span className="text-[90px] md:text-[200px] text-white font-bold tracking-tighter leading-none mr-4">
                            20
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}