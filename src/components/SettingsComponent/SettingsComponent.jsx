import ProfileSection from "../Shared/ProfileSection";
import AccountSection from "../SettingsComponent/AccountSection";
import PreferencesSection from "../SettingsComponent/PreferencesSection";
import useEditProfile from "../../hooks/useEditProfile";

const SettingsComponent = () => {
    const {
        profileImage,
        formDataRef,
        setProfileImage,
    } = useEditProfile();

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 text-white p-6">
            {/* Title */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Setting</h1>
            </div>

            {/* Profile Section */}
            <>
                <ProfileSection
                    profileImage={profileImage}
                    setProfileImage={setProfileImage}
                    formData={formDataRef}
                    isModal={true}

                />
            </>

            {/* Centered Account and Preferences Sections */}
            <div className="flex flex-col items-center gap-12 mt-12">
                {/* Account Section */}
                <AccountSection />

                {/* Preferences Section */}
                <PreferencesSection />
            </div>
        </div>
    );
};

export default SettingsComponent;
