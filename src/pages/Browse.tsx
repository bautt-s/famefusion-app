import MainBrowse from "../browse-sections/main-browse";
import SearchbarSection from "../browse-sections/searchbar";
import FooterSection from "../landing-sections/footer";
import NavSection from "../landing-sections/nav";
import { useEffect } from 'react'

function Browse() {
    useEffect(() => {
        document.title = 'FameFusion | Browse'
    }, [])

    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <NavSection />
            <SearchbarSection />
            <MainBrowse />
            <FooterSection />
        </div>
    );
}

export default Browse;