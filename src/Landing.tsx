import BenefitsSection from "./landing-sections/benefits";
import FeaturedSection from "./landing-sections/featured-stars";
import FooterSection from "./landing-sections/footer";
import HeroSection from "./landing-sections/hero";
import HowSection from "./landing-sections/how-it-works";
import NavSection from "./landing-sections/nav";
import ReviewsSection from "./landing-sections/reviews";

function Landing() {
    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <NavSection />
            <HeroSection />
            <FeaturedSection />
            <HowSection />
            <ReviewsSection />
            <BenefitsSection />
            <FooterSection />
        </div>
    );
}

export default Landing;