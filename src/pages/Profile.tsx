import FeaturedSection from "../landing-sections/featured-stars";
import FooterSection from "../landing-sections/footer";
import HowSection from "../landing-sections/how-it-works";
import NavSection from "../landing-sections/nav";
import MainView from "../profile-section/main-view";

function Profile() {
    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <NavSection />
            <MainView />
            <HowSection />

            <div className="mt-[-25px]">
                <FeaturedSection title='You might also like' />
            </div>

            <FooterSection />
        </div>
    );
}

export default Profile;