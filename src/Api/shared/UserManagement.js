import api from '../api';

export const changeUsername = async (name, userId) => {
    try {
        const res = await api.post('/auth/updateUsername', { name: name, userId: userId });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const changePassword = async (userId, currentPassword, newPassword) => {
    console.log(userId, currentPassword, newPassword);
    try {
        const res = await api.post('/auth/changePassword', { userId: userId, currentPassword: currentPassword, newPassword: newPassword });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


// export const updateProfilePicture = async (userId, profilePicture) => {
//     try {
//         const res = await api.post('/auth/updateProfilePicture', { userId: userId, profilePicture: profilePicture });
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

export const updateProfile = async (formData) => {
    console.log("formData2", formData);
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

// export const updateProfile = async (formData) => {
//     console.log("formData2", formData);
//     try {
//         const res = await fetch('http://localhost:3000/api/v1/auth/update-profile', {
//             method: 'PATCH',
//             body: formData,
//             headers: {
//                 // Don't set Content-Type explicitly when using FormData
//                 // 'Content-Type': 'multipart/form-data' will be automatically set including boundary
//             },
//             credentials: 'include', // if you're using cookies for auth
//         });

//         if (!res.ok) {
//             const errorData = await res.json();
//             throw new Error(errorData.message || 'Failed to update profile');
//         }

//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.error('Error updating profile:', error.message);
//         throw error;
//     }
// };
