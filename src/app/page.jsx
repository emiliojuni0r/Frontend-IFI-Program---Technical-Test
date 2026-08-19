import Banner from "@/components/homepage/banner";
import Faq from "@/components/homepage/Faq";
import PartnerClient from "@/components/homepage/PartnerClient";
import Solutions from "@/components/homepage/Solutions";
import Statistics from "@/components/homepage/Statistics";
import Works from "@/components/homepage/Works";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Banner />
      <Statistics />
      <Works />
      <Solutions />
      <PartnerClient />
      <Faq/>
    </main >

  );
}
