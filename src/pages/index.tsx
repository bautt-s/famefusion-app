import BenefitsSection from "@/components/landing/benefits";
import FeaturedSection from "@/components/landing/featured-stars";
import FooterSection from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero";
import HowSection from "@/components/landing/how-it-works";
import NavSection from "@/components/landing/nav";
import ReviewsSection from "@/components/landing/reviews";
import Head from "next/head";

function Landing() {
    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <Head>
                <title>FameFusion | Home</title>
            </Head>

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