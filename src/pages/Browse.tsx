import MainBrowse from "../components/browse-sections/main-browse";
import SearchbarSection from "../components/browse-sections/searchbar";
import FooterSection from "../components/landing-sections/footer";
import NavSection from "../components/landing-sections/nav";
import { useEffect, useState } from 'react'

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

    useEffect(() => {
        document.title = 'FameFusion | Browse'
    }, [])

    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <NavSection />
            <SearchbarSection selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <MainBrowse selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <FooterSection />
        </div>
    );
}

export default Browse;