import api from '../api';

export const changeUsername = async (name, userId) => {
    try {
        const res = await api.post('/auth/updateUsername', { name: name, userId: userId });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

// export const changePassword = async (userId, currentPassword, newPassword) => {
//     console.log(userId, currentPassword, newPassword);
//     try {
//         const res = await api.post('/auth/changePassword', { userId: userId, currentPassword: currentPassword, newPassword: newPassword });
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// }


// export const updateProfilePicture = async (userId, profilePicture) => {
//     try {
//         const res = await api.post('/auth/updateProfilePicture', { userId: userId, profilePicture: profilePicture });
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

export const updateProfile = async (formData) => {
    try {
        const res = await api.patch('/auth/update-profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error updating profile:', error.response?.data || error.message);
        throw error;
    }
};


export const changePassword = async (currentPassword, newPassword) => {
    try {

        const res = await api.post('/auth/changePassword', {
            currentPassword,
            newPassword
        });
        return res.data;
    } catch (error) {
        console.error("Error changing password:", error);

        // Extract the error message from Axios response if it exists
        const message =
            error.response?.data?.message ||
            error.response?.data?.error ||
            "An unexpected error occurred";

        return { error: message };
    }
};
