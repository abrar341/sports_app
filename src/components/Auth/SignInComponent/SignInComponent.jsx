import AuthCard from '../../Shared/AuthCard';
import AuthForm from '../../Shared/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../slices/usersApiSlice';
import { setCredentials } from '../../../slices/authSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SignInComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const [error, setError] = useState(null); // State to track errors

    const handleLogin = async (email, password) => {
        setError(null);
        try {
            const response = await login({ email, password }).unwrap();
            if (response.error) {
                console.error('Login failed:', response.error);
                setError(response.error);
                return;
            }
            dispatch(setCredentials(response));
            navigate('/dashboard'); // Redirect after successful login
        } catch (error) {
            console.error('Login failed:', error);
            setError(error.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="h-full px-10 col-span-5 md:col-span-5 h-screen w-full bg-primary flex flex-col  items-center justify-center">
            <div className="text-center mt-4 mb-6 ">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Nice To See You!</h1>
                <p className="text-white/75 text-sm ">
                    Please enter your email and password to sign in.
                </p>
            </div>
            <div className="realtive px-10">
                <AuthCard>
                    <AuthForm
                        formType="signin"
                        buttonText="SIGN IN"
                        footerText="Don't have an account?"
                        footerLink="/signup"
                        onLogin={handleLogin}
                        error={error} // Pass the error state to AuthForm
                        isLoading={isLoading} // Disable the submit button during loading
                    />
                </AuthCard>
            </div>
        </div>
    );
};

export default SignInComponent;
