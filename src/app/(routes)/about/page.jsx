import AboutBanner from "@/components/about/AboutBanner";
import ConnectingWorld from "@/components/about/ConnectingWorld";
import Milestones from "@/components/about/Milestones";
import Why from "@/components/about/Why";
import PartnerClient from "@/components/homepage/PartnerClient";

export default function About() {
    return (
        <>
            <main>
                <AboutBanner />
                <Milestones />
                <ConnectingWorld />
                <Why />

                <PartnerClient />
            </main>
        </>
    )
}