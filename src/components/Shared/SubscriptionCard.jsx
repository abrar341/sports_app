import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon

const SubscriptionCard = ({ planName, price, duration, features, buttonText, isActive }) => {
    return (
        <div
            className={`col-span-12 sm:col-span-6 lg:col-span-4 p-6 rounded-2xl border ${isActive ? "border-blue-400 bg-primarySolid text-white" : "border-gray-400 bg-[#01183A] text-white"
                } shadow-lg transition-transform transform hover:scale-100`}
        >
            <h2 className="text-lg font-semibold mb-2">{planName}</h2>
            <p className="text-2xl font-semibold mb-1">{price}</p>
            <p className="text-lg mb-4">{duration}</p>
            <h3 className="text-base font-semibold mb-2">What You’ll Get</h3>
            <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex text-base items-center">
                        <svg
                            className="w-5 h-5 mr-2 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                className={`w-full py-2 text-sm rounded-full  flex items-center justify-center gap-2 ${isActive ? "bg-black hover:bg-gray-800" : "bg-blue-600 hover:bg-blue-500"
                    } transition-all`}
            >
                {buttonText}
                <FaArrowRight /> {/* Arrow Icon */}
            </button>
        </div>
    );
};

SubscriptionCard.propTypes = {
    planName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    buttonText: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};

export default SubscriptionCard;
