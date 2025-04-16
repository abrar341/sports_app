import ProfileSection from "../components/Shared/ProfileSection";
import AccountSection from "../components/SettingsComponent/AccountSection";
import PreferencesSection from "../components/SettingsComponent/PreferencesSection";
import useEditProfile from "../hooks/useEditProfile";

const SettingsPage = () => {
    const {
        profileImage,
        formDataRef,
        setProfileImage,
    } = useEditProfile();
    return (
        <div className="min-h-screen bg-primary text-white p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            {/* Profile Section */}
            <>

                <ProfileSection
                    profileImage={profileImage}
                    setProfileImage={setProfileImage}
                    formData={formDataRef}
                    isModal={true}
                />
            </>

            {/* Account Section */}
            <AccountSection />

            {/* Preferences Section  this section belongs to the lower in setting where language and logout there */}
            <PreferencesSection />
        </div>
    );
};

export default SettingsPage;
