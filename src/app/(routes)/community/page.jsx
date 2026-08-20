import Banner2Community from "@/components/community/Banner2Community";
import BannerCommunity from "@/components/community/BannerCommunity";
import WhatWeDO from "@/components/community/WhatWeDO";
import PartnerClient from "@/components/homepage/PartnerClient";

export default function Community() {
    return (
        <>
            <BannerCommunity />
            <Banner2Community />
            <WhatWeDO />
            <PartnerClient />
        </>
    )
}