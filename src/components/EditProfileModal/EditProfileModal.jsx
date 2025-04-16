import { useState, useRef } from "react";
import ModalComponent from "../Shared/ModalComponent";
import ModalForm from "../Shared/ModalForm";
import SettingCard from "../Shared/SettingCard";
import ProfileSection from "../Shared/ProfileSection";
import { FaUserEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../Api/shared/UserManagement";
import { updateProfileInfo } from "../../slices/authSlice";

const EditProfileModal = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    // Shared FormData ref
    const formDataRef = useRef(new FormData());

    const handleOpen = () => setIsOpen(true);

    const handleClose = () => {
        setError(null);
        setProfileImage(null);
        formDataRef.current = new FormData(); // Reset FormData
        setIsOpen(false);
    };

    const handleSubmit = async (formValues) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const originalName = userInfo?.data?.name;
            const newName = formValues.name;

            // Check if name changed
            const nameChanged = originalName !== newName;

            // Check if profile image was updated (exists in FormData)
            const hasProfileImage = formDataRef.current.has("profilePicture");

            // If no changes, return early
            if (!nameChanged && !hasProfileImage) {
                console.log("No changes detected. Skipping update.");
                setIsSubmitting(false);
                return;
            }

            // Append name if changed
            if (nameChanged) {
                formDataRef.current.set("name", newName);
            }

            // Debug: log all FormData values
            // for (let [key, value] of formDataRef.current.entries()) {
            //     console.log(`${key}:`, value);
            // }

            // Call the update API
            const res = await updateProfile(formDataRef.current);

            if (res?.error) {
                setError(res.message);
                return;
            }

            dispatch(updateProfileInfo(res.data));
            handleClose();
        } catch (error) {
            console.error(error);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <SettingCard
                icon={<FaUserEdit />}
                title="Edit Profile"
                iconColor="red-400"
                onClick={handleOpen}
            />
            <ModalComponent isOpen={isOpen} onClose={handleClose}>
                <ProfileSection
                    profileImage={profileImage}
                    setProfileImage={setProfileImage}
                    formData={formDataRef}
                    isModal={false}
                />
                <ModalForm
                    fields={[
                        {
                            label: "Name",
                            defaultValue: userInfo?.data?.name || "",
                            placeholder: "Enter your name",
                        },
                    ]}
                    onClose={handleClose}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    error={error}
                />
            </ModalComponent>
        </>
    );
};

export default EditProfileModal;
