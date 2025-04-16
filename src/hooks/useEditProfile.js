// hooks/useEditProfile.js
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../Api/shared/UserManagement";
import { updateProfileInfo } from "../slices/authSlice";

const useEditProfile = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);

    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    const formDataRef = useRef(new FormData());


    const handleSubmit = async (formValues) => {
        setIsSubmitting(true);
        setError(null);

        try {
            formDataRef.current.set("name", userInfo.data.name);

            for (let [key, value] of formDataRef.current.entries()) {
                console.log(`${key}:`, value);
            }


            const res = await updateProfile(formDataRef.current);

            if (res?.error) {
                setError(res.message);
                return;
            }

            dispatch(updateProfileInfo(res.data));
        } catch (error) {
            console.error(error);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        userInfo,
        error,
        isSubmitting,
        profileImage,
        formDataRef,
        setProfileImage,
        handleSubmit,
    };
};

export default useEditProfile;
