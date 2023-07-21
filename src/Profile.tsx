import FooterSection from "./landing-sections/footer";
import HowSection from "./landing-sections/how-it-works";
import NavSection from "./landing-sections/nav";
import MainView from "./profile-section/main-view";

function Profile() {
    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <NavSection />
            <MainView />
            <HowSection />
            <FooterSection />
        </div>
    );
}

export default Profile;