import { FaCog, FaHeart } from "react-icons/fa";
import ProfileSection from "../Shared/ProfileSection";
import SettingCard from "../Shared/SettingCard";
import { useNavigate } from "react-router-dom";
import useEditProfile from "../../hooks/useEditProfile";

const AccountSettingComponent = () => {
    const navigate = useNavigate();
    const {
        error,
        isSubmitting,
        profileImage,
        formDataRef,
        setProfileImage,
        handleSubmit,
    } = useEditProfile();
    return (
        <div className="min-h-screen bg-primary text-white p-6">
            {/* Title */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Account Settings</h1>
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

            {/* Option Cards */}
            <div className="flex flex-col items-center gap-6 mt-6">
                {/* Setting Card */}
                <SettingCard
                    icon={<FaCog />}
                    title="Setting"
                    iconColor="blue-400"
                    onClick={() => navigate('/dashboard/setting')}
                />
                {/* Favourite List Card */}
                <SettingCard
                    icon={<FaHeart />}
                    title="Favourite List"
                    iconColor="purple-400"
                    onClick={() => navigate('/dashboard/player-team-favourites')}
                />
            </div>
        </div>
    );
};

export default AccountSettingComponent;
