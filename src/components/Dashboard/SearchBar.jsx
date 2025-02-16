import { FaSearch, FaSlidersH } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className="grid gap-2 grid-cols-5">
            <div className=" col-span-4 flex items-center bg-[rgba(255,255,255,0.32)] px-4 py-3 rounded-full shadow-[0px_1px_55px_0px_rgba(84,84,84,0.06)] ">
                {/* Search Icon */}
                <div className="text-white mr-2 text-2xl"> {/* Increased icon size */}
                    <FaSearch />
                </div>
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search By Player/Team/Game..."
                    className="flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none px-2"
                />


            </div>
            <button className="bg-primarySolid px-4 py-3 rounded-full text-white">
                Advanced search
            </button>
        </div>
    );
};

export default SearchBar;
