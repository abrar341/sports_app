import { useSelector } from "react-redux";
import SubscriptionCard from "../Shared/SubscriptionCard";
import SubscriptionData from "./SubscriptionData";
import { FaArrowRight } from "react-icons/fa";
import { differenceInSeconds, formatDistanceStrict, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";



const Subscription = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const { subscriptionPlanExpiry } = userInfo.data;


    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const calculateTimeLeft = () => {
            const expiryDate = new Date(subscriptionPlanExpiry);
            const now = new Date();
            const totalSeconds = differenceInSeconds(expiryDate, now);

            if (totalSeconds <= 0) {
                setTimeLeft("Expired");
                return;
            }

            // Convert total seconds into days, hours, minutes, seconds
            const days = Math.floor(totalSeconds / (24 * 3600));
            const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            setTimeLeft(
                `${days > 0 ? `${days}d ` : ""}${hours}h ${minutes}m ${seconds}s`
            );
        };

        calculateTimeLeft(); // Run immediately
        const interval = setInterval(calculateTimeLeft, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, [subscriptionPlanExpiry]);

    return (
        <div className="min-h-screen text-white py-4 px-6">
            <h1 className="text-center text-2xl font-bold mb-4">Subscription Plan</h1>
            {/* Center Cards */}
            {/* Show Trial Mode Message */}
            {/* Show Trial Mode Message */}

            {/* {subscriptionPlan === "trial" && subscriptionStatus === "active" && (
                <div className="md:w-1/2 mx-auto bg-green-500 text-white text-center py-3 px-4 mb-4 ">
                    <h2 className="text-base font-medium">
                        You are currently in <span className="font-semibold">Trial Mode</span>!
                        <br />
                        Expires in  <span className="text-xl font-semibold">{timeLeft}</span>.
                    </h2>
                </div>
            )} */}


            <div className="grid grid-cols-12 gap-6 w-full mx-auto lg:px-20 ">
                {SubscriptionData.map((plan, index) => (
                    <SubscriptionCard
                        key={index}
                        planName={plan.planName}
                        price={plan.price}
                        duration={plan.duration}
                        features={plan.features}
                        buttonText={plan.buttonText}
                        isActive={plan.isActive}
                        priceId={plan.priceId} // Pass priceId
                        subscriptionPlan={plan.subscriptionPlan}
                        timeLeft={timeLeft}
                    />
                ))}
            </div>
            {/* Buttons Section */}
            {/* <div className="mt-8 w-full max-w-7xl mx-auto grid grid-cols-1 md:flex md:justify-end gap-4">
                <button className="w-full md:w-auto  flex items-center justify-center bg-primarySolid hover:bg-blue-700 text-white  py-2 px-8 rounded-full transition-all">
                    Changes
                </button>
                <button className="w-full md:w-auto  flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white  py-2 px-8 rounded-full transition-all">
                    Cancel
                </button>
            </div> */}
        </div >
    );
};

export default Subscription;