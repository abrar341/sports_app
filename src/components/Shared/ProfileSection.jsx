import { useRef, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../Api/shared/UserManagement.js";
import { updateProfileInfo } from "../../slices/authSlice";

const ProfileSection = ({ profileImage, setProfileImage, formData, isModal }) => {
    console.log("isModal:", isModal);

    const { userInfo } = useSelector((state) => state.auth);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    const [isImageUpdated, setIsImageUpdated] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
            formData.current.set("profilePicture", file);
            setIsImageUpdated(true);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleUpdate = async () => {
        setIsSubmitting(true);
        setError(null);
        try {

            formData.current.set("name", userInfo.data.name);

            //this is just for debug
            // for (let [key, value] of formData.current.entries()) {
            //     console.log(`${key}:`, value);
            // }
            const res = await updateProfile(formData.current);

            if (res?.error) {
                setError(res.message);
                return;
            }

            dispatch(updateProfileInfo(res.data));
            setIsImageUpdated(false);
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col items-center mb-12">
            <div className="relative">
                <img
                    src={profileImage || userInfo?.data?.profilePictureURL || "/assets/accountsetting.jpg"}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover"
                    loading="lazy"
                />
                <div
                    className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full cursor-pointer"
                    onClick={triggerFileInput}
                >
                    <FaUserEdit className="text-white w-4 h-4" />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageChange}
                />
            </div>

            <h2 className="text-xl font-semibold mt-4">{userInfo.data.name}</h2>
            <p className="text-gray-300 hover:underline hover:text-blue-400 cursor-pointer">
                {userInfo.data.email}
            </p>

            {isImageUpdated && isModal && (
                <button
                    onClick={handleUpdate}
                    className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Updating..." : "Update"}
                </button>
            )}

            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default ProfileSection;
