import PropTypes from 'prop-types';
import SocialAuthButtons from './SocialAuthButtons';
import { useState } from 'react';
import AuthInput from './AuthInput';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ formType, buttonText, footerText, footerLink, onLogin, onSignup, error, isLoading }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});
    const navigate = useNavigate();


    const validateFields = () => {
        const errors = {};

        // Validate name (only for signup)
        if (formType === 'signup' && !name.trim()) {
            errors.name = 'Name is required.';
        }

        // Validate email
        if (!email.trim()) {
            errors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Invalid email format.';
        }

        // Validate password
        if (!password.trim()) {
            errors.password = 'Password is required.';
        } else if (formType === 'signup' && password.length < 8) {
            errors.password = 'Password must be at least 8 characters long.';
        }
        else if (formType === 'signup' && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) {
            errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Run validations
        const errors = validateFields();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors); // Set validation errors
            return; // Stop form submission if there are errors
        }

        // Clear field-specific errors
        setFieldErrors({});

        if (formType === 'signup' && onSignup) {
            onSignup(name, email, password);
        } else if (formType === 'signin' && onLogin) {
            onLogin(email, password);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex space-y-3 px-5 py-7 pt-9 flex-col items-center justify-center"
        >
            <p className="self-center text-center text-gray-300 text-sm leading-tight text-center text-white">
                Register with
            </p>
            <SocialAuthButtons />
            <p className="-w-full text-center text-gray-400">or</p>

            {formType === 'signup' && (
                <>
                    <AuthInput
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label={"Name"}

                    />
                    {fieldErrors.name && (
                        <div className="text-red-500 text-sm">{fieldErrors.name}</div>
                    )}
                </>
            )}
            <>
                <AuthInput
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label={"Email"}
                />
                {fieldErrors.email && (
                    <div className="text-red-500 text-sm">{fieldErrors.email}</div>
                )}
            </>
            <>
                <AuthInput
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label={"Password"}

                />
                {fieldErrors.password && (
                    <div className="text-red-500 text-sm">{fieldErrors.password}</div>
                )}
            </>

            {error && (
                <div className="bg-red-100 text-red-700 text-sm rounded-lg p-2 w-full text-center">
                    {error}
                </div>
            )}

            <button
                type="submit"
                className={`w-full py-1 rounded-lg text-white ${isLoading
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                disabled={isLoading} // Disable button during API call
            >
                {isLoading ? 'Loading...' : buttonText}
            </button>

            <p className="text-center mt-4 text-sm text-gray-500">
                {footerText}{' '}
                <span
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={() => navigate(formType === 'signin' ? '/signup' : '/signin')}
                >
                    {formType === 'signin' ? 'Sign up' : 'Sign in'}
                </span>
            </p>
        </form>
    );
};

AuthForm.propTypes = {
    formType: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
    footerLink: PropTypes.string.isRequired,
    onSignup: PropTypes.func,
    onLogin: PropTypes.func,
    error: PropTypes.string, // Error message to display
    isLoading: PropTypes.bool, // Loading state
};

export default AuthForm;
