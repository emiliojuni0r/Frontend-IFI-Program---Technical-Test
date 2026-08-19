import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-black to-[#4B4B4B] py-20 from-40%">
            <div className="container mx-auto px-5 md:px-0">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
                    
                    
                    <div className="w-full lg:w-1/3">
                        <Link href="/">
                            <div className="relative w-48 md:w-64 h-16 md:h-20 mb-5">
                                <Image 
                                    src="/logo/logo_cc.webp" 
                                    alt="Coding Collective Logo" 
                                    fill
                                    className="object-contain object-left"
                                    sizes="(max-width: 768px) 192px, 256px"
                                />
                            </div>
                        </Link>

                        
                        <div className="mb-5">
                            <div className="flex gap-2 mb-2">
                                <div className="my-auto">
                                    <svg width="20" height="20" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0826 29.3972C11.7361 29.3972 11.3971 29.2993 11.1034 29.1035C10.6514 28.8022 0 21.5707 0 12.7271C0 9.5257 1.27304 6.45231 3.54042 4.18494C5.80779 1.91756 8.88118 0.644531 12.0826 0.644531C15.2841 0.644531 18.3575 1.91756 20.6248 4.18494C22.8922 6.45231 24.1653 9.5257 24.1653 12.7271C24.1653 21.5933 13.5063 28.8022 13.0544 29.1035C12.7681 29.2918 12.4291 29.3972 12.0826 29.3972ZM12.0826 4.16234C9.81524 4.16234 7.63827 5.06629 6.02625 6.67078C4.42176 8.27527 3.51782 10.4522 3.51782 12.7271C3.51782 18.3541 9.64952 23.597 12.0826 25.4576C14.5082 23.597 20.6399 18.3541 20.6399 12.7271C20.6399 10.4598 19.736 8.28278 18.1315 6.6783C16.527 5.06627 14.35 4.16234 12.0826 4.16234Z" fill="#FFBE00"></path>
                                        <path d="M12.0831 16.1696C13.9814 16.1696 15.5256 14.6254 15.5256 12.7271C15.5256 10.8289 13.9814 9.28467 12.0831 9.28467C10.1848 9.28467 8.64062 10.8289 8.64062 12.7271C8.64062 14.6254 10.1848 16.1696 12.0831 16.1696Z" fill="#FFBE00"></path>
                                    </svg>
                                </div>
                                <div className="text-white font-bold text-lg my-auto">Indonesia</div>
                            </div>
                            <div className="text-base text-white max-w-sm">Jl. Soga No.46 Tahunan, Kec.Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55167</div>
                        </div>

                        
                        <div>
                            <div className="flex gap-2 mb-2">
                                <div className="my-auto">
                                    <svg width="20" height="20" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0826 29.3972C11.7361 29.3972 11.3971 29.2993 11.1034 29.1035C10.6514 28.8022 0 21.5707 0 12.7271C0 9.5257 1.27304 6.45231 3.54042 4.18494C5.80779 1.91756 8.88118 0.644531 12.0826 0.644531C15.2841 0.644531 18.3575 1.91756 20.6248 4.18494C22.8922 6.45231 24.1653 9.5257 24.1653 12.7271C24.1653 21.5933 13.5063 28.8022 13.0544 29.1035C12.7681 29.2918 12.4291 29.3972 12.0826 29.3972ZM12.0826 4.16234C9.81524 4.16234 7.63827 5.06629 6.02625 6.67078C4.42176 8.27527 3.51782 10.4522 3.51782 12.7271C3.51782 18.3541 9.64952 23.597 12.0826 25.4576C14.5082 23.597 20.6399 18.3541 20.6399 12.7271C20.6399 10.4598 19.736 8.28278 18.1315 6.6783C16.527 5.06627 14.35 4.16234 12.0826 4.16234Z" fill="#FFBE00"></path>
                                        <path d="M12.0831 16.1696C13.9814 16.1696 15.5256 14.6254 15.5256 12.7271C15.5256 10.8289 13.9814 9.28467 12.0831 9.28467C10.1848 9.28467 8.64062 10.8289 8.64062 12.7271C8.64062 14.6254 10.1848 16.1696 12.0831 16.1696Z" fill="#FFBE00"></path>
                                    </svg>
                                </div>
                                <div className="text-white font-bold text-lg my-auto">Singapore</div>
                            </div>
                            <div className="text-base text-white max-w-sm">Level 08-09, The Metropolis Tower 2 11 North Buona Vista Drive, Singapore 138589</div>
                        </div>
                    </div>

                    
                    <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 lg:gap-20">
                        
                    
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6">Navigation</h4>
                            <ul className="space-y-4">
                                <li><Link className="transition-colors duration-300 text-base text-[#FFC700] font-bold" href="/">Home</Link></li>
                                <li><Link className="transition-colors duration-300 text-base text-gray-400 hover:text-[#FFC700]" href="/about">About</Link></li>
                                <li><Link className="transition-colors duration-300 text-base text-gray-400 hover:text-[#FFC700]" href="/services">Services</Link></li>
                                <li><Link className="transition-colors duration-300 text-base text-gray-400 hover:text-[#FFC700]" href="/industries">Industries</Link></li>
                                <li><Link className="transition-colors duration-300 text-base text-gray-400 hover:text-[#FFC700]" href="/community">Community</Link></li>
                                <li><Link className="transition-colors duration-300 text-base text-gray-400 hover:text-[#FFC700]" href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6">Social</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-gray-400 hover:text-[#FFC700] transition-colors duration-300 text-base flex items-center gap-2 group" 
                                        href="https://www.linkedin.com/company/codingcollective/"
                                    >
                                        LinkedIn
                                        <svg className="w-4 h-4 text-gray-500 group-hover:text-[#FFC700] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-gray-400 hover:text-[#FFC700] transition-colors duration-300 text-base flex items-center gap-2 group" 
                                        href="https://www.instagram.com/codingcollective.id/"
                                    >
                                        Instagram
                                        <svg className="w-4 h-4 text-gray-500 group-hover:text-[#FFC700] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        
                        <div className="pt-0 sm:pt-12">
                            <ul className="space-y-4">
                                <li><Link className="transition-colors duration-300 text-base text-gray-400 hover:text-[#FFC700]" href="/terms-and-conditions">Terms & Support</Link></li>
                                <li><Link className="transition-colors duration-300 text-base text-gray-400 hover:text-[#FFC700]" href="/privacy-policy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}