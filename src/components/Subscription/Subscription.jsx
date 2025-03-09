import SubscriptionCard from "../Shared/SubscriptionCard";
import SubscriptionData from "./SubscriptionData";
import { FaArrowRight } from "react-icons/fa";

const Subscription = () => {

    console.log("SubscriptionData", SubscriptionData);

    return (
        <div className="min-h-screen text-white py-4 px-6">
            <h1 className="text-center text-2xl font-bold mb-4">Subscription Plan</h1>
            {/* Center Cards */}
            <div className="grid grid-cols-12 gap-6 w-full mx-auto lg:px-40 ">
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

                    />
                ))}
            </div>
            {/* Buttons Section */}
            <div className="mt-8 w-full max-w-7xl mx-auto grid grid-cols-1 md:flex md:justify-end gap-4">
                <button className="w-full md:w-auto  flex items-center justify-center bg-primarySolid hover:bg-blue-700 text-white  py-2 px-8 rounded-full transition-all">
                    Changes
                </button>
                <button className="w-full md:w-auto  flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white  py-2 px-8 rounded-full transition-all">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Subscription;