import { useState } from "react";
import ModalComponent from "../Shared/ModalComponent";
import ModalForm from "../Shared/ModalForm";
import SettingCard from "../Shared/SettingCard";
import { FaLock } from "react-icons/fa";
import { changePassword } from '../../Api/shared/UserManagement.js';
import { useSelector } from 'react-redux';

const ChangePasswordModal = () => {

    const { userInfo } = useSelector((state) => state.auth);

    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null); // Handle errors
    const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setError(null); // Clear errors when closing the modal
        setIsOpen(false);
    };

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        setError(null);

        // Format and log form data
        const formattedData = {
            currentPassword: formData["current password"],
            newPassword: formData["new password"],
            confirmPassword: formData["confirm password"],
        };

        // Optional: check if new and confirm passwords match
        if (formattedData.newPassword !== formattedData.confirmPassword) {
            setError("New password and confirm password do not match.");
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await changePassword(formattedData.currentPassword, formattedData.newPassword);

            // Check if the backend sent an error
            if (res && res.error) {
                setError(res.error);
            } else {
                // Only close if no error
                handleClose();
            }
        } catch (error) {
            console.error("Change password error:", error);

        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            {/* Setting Card for Change Password */}
            <SettingCard
                icon={<FaLock />}
                title="Change Password"
                iconColor="purple-400"
                onClick={handleOpen}
            />

            {/* Modal Component */}
            <ModalComponent isOpen={isOpen} onClose={handleClose}>
                {/* Change Password Form */}
                <ModalForm
                    fields={[
                        { label: "Current Password", type: "password", defaultValue: "", placeholder: "Enter current password" },
                        { label: "New Password", type: "password", defaultValue: "", placeholder: "Enter new password" },
                        { label: "Confirm Password", type: "password", defaultValue: "", placeholder: "Re-enter new password" },
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

export default ChangePasswordModal;
