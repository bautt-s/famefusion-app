import BenefitsSection from "./sections/benefits";
import FeaturedSection from "./sections/featured-stars";
import FooterSection from "./sections/footer";
import HeroSection from "./sections/hero";
import HowSection from "./sections/how-it-works";
import NavSection from "./sections/nav";
import ReviewsSection from "./sections/reviews";

function App() {
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

export default App;