import BenefitsSection from "./sections/benefits";
import FeaturedSection from "./sections/featured-stars";
import HeroSection from "./sections/hero";
import HowSection from "./sections/how-it-works";
import NavSection from "./sections/nav";
import ReviewsSection from "./sections/reviews";

function App() {
    return (
        <div className="w-screen overflow-x-hidden">
            <NavSection />
            <HeroSection />
            <FeaturedSection />
            <HowSection />
            <ReviewsSection />
            <BenefitsSection />
        </div>
    );
}

export default App;