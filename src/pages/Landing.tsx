import { useEffect } from "react";
import BenefitsSection from "../components/landing-sections/benefits";
import FeaturedSection from "../components/landing-sections/featured-stars";
import FooterSection from "../components/landing-sections/footer";
import HeroSection from "../components/landing-sections/hero";
import HowSection from "../components/landing-sections/how-it-works";
import NavSection from "../components/landing-sections/nav";
import ReviewsSection from "../components/landing-sections/reviews";

function Landing() {
    useEffect(() => {
        document.title = 'FameFusion | Home'
    }, [])

    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <NavSection />
            <HeroSection />
            <FeaturedSection title='Featured Stars' />
            <HowSection />
            <ReviewsSection />
            <BenefitsSection />
            <FooterSection />
        </div>
    );
}

export default Landing;