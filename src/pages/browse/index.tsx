import MainBrowse from "@/components/browse/main-browse";
import SearchbarSection from "@/components/browse/searchbar";
import FooterSection from "@/components/landing/footer";
import NavSection from "@/components/landing/nav";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Browse() {
    const [selectedFilters, setSelectedFilters] = useState({
        location: '',

        price: {
            range: false,
            min: 0,
            max: 100
        },

        availability: {
            startDate: undefined,
            endDate: undefined
        },

        ageFilter: [],
        ageGroup: [],
        languages: [],
        gender: [],
        interests: [],
        opportunities: [],
        category: '',
        name: ''
    })

    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <Head>
                <title>FameFusion | Browse</title>
            </Head>

            <NavSection />
            <SearchbarSection selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <MainBrowse selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <FooterSection />
        </div>
    );
}

export default Browse;