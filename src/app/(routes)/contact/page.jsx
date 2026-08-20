export default function Contact() {
    return (
        <section className="min-h-screen bg-[#0a0a0a] text-white py-30 md:py-50 px-6 md:px-12 lg:px-24 antialiased flex justify-center">
            <div className="container mx-auto">

                {/* Header */}
                <div className="pb-20">
                    <h1 className="text-4xl md:text-[50px] font-bold mb-5 tracking-tight animate-fade-up [animation-delay:100ms] will-change-transform">
                        Get in Touch.
                    </h1>

                    <p className="text-white text-base md:text-[20px] animate-fade-up [animation-delay:300ms] will-change-transform">
                        Whether you are exploring a new technology initiative,{" "}
                        <br className="hidden md:block" />
                        looking for a delivery partner, or seeking IT talent support,{" "}
                        <br className="hidden md:block" />
                        please complete the form below.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-8">

                    {/* Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">

                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="text-base text-white"
                            >
                                Your Name*
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Ex: John Doe"
                                required
                                className="w-full bg-transparent border border-[#333] rounded-lg p-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        {/* Role */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="role"
                                className="text-base text-white"
                            >
                                Role*
                            </label>

                            <input
                                id="role"
                                name="role"
                                type="text"
                                placeholder="Ex: CEO"
                                required
                                className="w-full bg-transparent border border-[#333] rounded-lg p-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="company"
                                className="text-base text-white"
                            >
                                Company Name*
                            </label>

                            <input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Ex: Coding Collective"
                                required
                                className="w-full bg-transparent border border-[#333] rounded-lg p-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="phone"
                                className="text-base text-white"
                            >
                                Phone Number*
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Ex: +62xxx"
                                required
                                className="w-full bg-transparent border border-[#333] rounded-lg p-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-base text-white"
                            >
                                Work Email*
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Ex: name@company.com"
                                required
                                className="w-full bg-transparent border border-[#333] rounded-lg p-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        {/* Need */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="need"
                                className="text-base text-white"
                            >
                                Your Need*
                            </label>

                            <div className="relative">
                                <select
                                    id="need"
                                    name="need"
                                    defaultValue=""
                                    required
                                    className="w-full bg-transparent border border-[#333] rounded-lg p-3.5 pr-12 text-white appearance-none focus:outline-none focus:border-white transition-colors cursor-pointer"
                                >
                                    <option
                                        value=""
                                        disabled
                                        className="bg-[#1c1c1c]"
                                    >
                                        Choose Your Need
                                    </option>

                                    <option
                                        value="Talent Solution"
                                        className="bg-[#1c1c1c]"
                                    >
                                        Talent Solution
                                    </option>

                                    <option
                                        value="IT Digital Solution"
                                        className="bg-[#1c1c1c]"
                                    >
                                        IT Digital Solution
                                    </option>

                                    <option
                                        value="General IT Need"
                                        className="bg-[#1c1c1c]"
                                    >
                                        General IT Need
                                    </option>

                                    <option
                                        value="Other"
                                        className="bg-[#1c1c1c]"
                                    >
                                        Other
                                    </option>
                                </select>

                                {/* Dropdown Icon */}
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-base text-white"
                        >
                            Message*
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            className="w-full bg-transparent border border-[#333] rounded-lg p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="relative group overflow-hidden bg-[#FFC700] text-black text-base px-10 py-3 rounded-lg shadow-xl border-2 border-[#FFC700] transition-all duration-300 ease-out disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none"
                        >
                            <div className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />

                            <span className="relative z-10 font-semibold group-hover:text-[#FFC700] transition-colors duration-300 ease-out">
                                Submit
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
