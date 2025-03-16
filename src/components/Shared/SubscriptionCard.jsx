import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";
import { cancelSubscription, createCheckoutSession } from "../../Api/Stripe/stripe";
import { plans } from "../Subscription/adjustedDates";

const ActionButton = ({ onClick, loading, children, icon, disabled, className }) => (
    <button
        onClick={onClick}
        className={`w-full py-2 text-sm rounded-full flex items-center justify-center gap-2 ${className} transition-all`}
        disabled={loading || disabled}
    >
        {loading ? (
            <div className="flex rounded-xl justify-center items-center">
                <div className="w-5 h-5 border-4 border-primarySolid border-t-secondary rounded-full animate-spin"></div>
            </div>
        ) : (
            <>
                {children}
                {icon}
            </>
        )}
    </button>
);

const SubscriptionCard = ({ planName, price, duration, timeLeft, features, buttonText, priceId, subscriptionPlan }) => {
    const { email } = useSelector((state) => state.auth.userInfo.data);
    const { userInfo } = useSelector((state) => state.auth);
    const [isCancelLoading, setIsCancelLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const [cancelMessage, setCancelMessage] = useState(""); // State for error message


    const [loading, setLoading] = useState(false);

    const activePlan = userInfo.data.subscriptionPlan === subscriptionPlan;
    const inTrailMode = userInfo.data.subscriptionPlan === "trial";
    const isActive = userInfo.data.subscriptionStatus === 'active';
    const isTrailPlan = subscriptionPlan === 'trial';

    const handleSubscribe = async () => {
        if (!email) {
            console.error("User email not found.");
            return;
        }
        setLoading(true);
        try {
            const session = await createCheckoutSession(email, priceId, true, subscriptionPlan);
            if (session?.data?.sessionUrl) {
                window.location.href = session.data.sessionUrl;
            }
        } catch (error) {
            console.error("Error creating checkout session", error.response?.data?.message);
            setErrorMessage(error.response?.data?.message || "Error occured")
        } finally {
            setLoading(false);
        }
    };
    const handleCancelSubscription = async () => {
        try {
            setIsCancelLoading(true);
            const res = await cancelSubscription(email); // Replace userEmail with actual email
            setCancelMessage(res.message)

        } catch (error) {
            console.error("Error cancelling subscription:", error);
        } finally {
            setIsCancelLoading(false);
        }
    };
    // Remove error after 3 seconds
    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => setErrorMessage(""), 3000);
            return () => clearTimeout(timer);
        }
        if (cancelMessage) {
            const timer = setTimeout(() => setCancelMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage, cancelMessage]);
    return (
        <div className={`col-span-12 sm:col-span-6 lg:col-span-4 p-6 rounded-2xl border ${activePlan ? "border-blue-400 bg-primarySolid text-white" : "border-gray-400 bg-[#01183A] text-white"} shadow-lg transition-transform transform hover:scale-100`}>
            <h2 className="text-lg font-semibold mb-1">{planName}</h2>
            {activePlan && timeLeft && !/NaN/.test(timeLeft) && (
                <p className="text-sm  text-white  rounded inline-block mb-1">
                    {timeLeft} left
                </p>
            )}
            <p className="text-2xl font-semibold mb-1">{price}</p>
            <p className="text-lg mb-4">{duration}</p>
            <h3 className="text-base font-semibold mb-2">What You’ll Get</h3>
            <ul className={`space-y-2 ${cancelMessage || errorMessage ? "mb-2" : "mb-6"}`}>
                {features.map((feature, index) => (
                    <li key={index} className="flex text-base items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            {errorMessage && (
                <p className="text-sm text-center text-red-500 mb-2">{errorMessage}</p>
            )}
            {cancelMessage && (
                <p className="text-sm text-center font-semibold text-green-600 mb-2">{cancelMessage}</p>
            )}
            {!activePlan || !isActive ? (
                <ActionButton disabled={isTrailPlan} onClick={handleSubscribe} isActive={activePlan} loading={loading} icon={<FaArrowRight />} className="bg-blue-600 hover:bg-blue-500">
                    {buttonText}
                </ActionButton>
            ) : (
                <div className="flex gap-2">
                    <ActionButton isActive={activePlan} loading={loading} disabled className="bg-black cursor-not-allowed">
                        Activated
                    </ActionButton>
                    {!inTrailMode && <ActionButton onClick={handleCancelSubscription} isActive={activePlan} loading={isCancelLoading} icon={<FaTimes />} className="bg-red-600 hover:bg-red-500">
                        Cancel
                    </ActionButton>}
                </div>
            )}
        </div>
    );
};

SubscriptionCard.propTypes = {
    planName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    buttonText: PropTypes.string.isRequired,
    activePlan: PropTypes.bool,
    priceId: PropTypes.string.isRequired,
};

export default SubscriptionCard;
