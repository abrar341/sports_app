import { FaRegSadTear, FaSearch } from "react-icons/fa";

export const EmptyState = ({ icon: Icon, message, className }) => {
    return (
        <div className={`flex h-full flex-col rounded-xl items-center justify-center p-6 text-gray-400 ${className}`}>
            <Icon className="w-10 h-10 mb-2" />
            <p>{message}</p>
        </div>
    );
};

// Usage Examples
const ExampleUsage = () => {
    return (
        <div>
            <EmptyState icon={FaRegSadTear} message="No favorite teams added yet." />
            <EmptyState icon={FaSearch} message="Search for a player and select it." />
        </div>
    );
};
