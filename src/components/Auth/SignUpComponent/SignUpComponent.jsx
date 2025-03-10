import AuthCard from '../../Shared/AuthCard';
import AuthForm from '../../Shared/AuthForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../slices/usersApiSlice';
import { setCredentials } from '../../../slices/authSlice';

const SignUpComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const handleSignup = async (name, email, password) => {
        try {
            const response = await register({ name, email, password }).unwrap();
            dispatch(setCredentials(response));
            navigate('/dashboard');
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className="h-full px-10 col-span-5 md:col-span-5 h-screen w-full bg-primary flex flex-col  items-center justify-center">
            <div className="text-center mt-4 mb-6 ">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome!</h1>
                <p className="text-white/75 text-sm md:text-base">
                    Sign Up.
                </p>
            </div>
            <div className="realtive px-10">
                <AuthCard>
                    <AuthForm
                        formType="signup"
                        buttonText="SIGN UP"
                        footerText="Already have an account?"
                        footerLink="/signin"
                        onSignup={handleSignup}
                    />
                </AuthCard>
            </div>
        </div>
    );
};

export default SignUpComponent;
