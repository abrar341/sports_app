import { FaExclamationTriangle, FaTrophy, FaCloudRain } from "react-icons/fa";
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";

const AlertCard = () => {
    const { playerProfileLoading } = useSelector((state) => state.loading);

    return playerProfileLoading ? <Loading /> : (
        <div className="bg-secondary p-6 rounded-xl w-full h-full">
            <div className="flex justify-between">
                <h3 className="text-lg text-gray-200 font-bold mb-4">⚠️ Alerts</h3>
                <p className="mt-4 text-sm text-gray-200 ">2 Hours Ago</p>
            </div>
            <ul className="space-y-2 text-sm">
                <li className="flex text-gray-200 items-center">
                    <FaExclamationTriangle className="mr-2 text-yellow-400" />
                    Player X Is Out Due To Injury.
                </li>
                <li className="flex text-gray-200 items-center">
                    <FaCloudRain className="mr-2 text-blue-400" />
                    Match A Vs B Delayed Due To Weather.
                </li>
                <li className="flex text-gray-200 items-center">
                    <FaTrophy className="mr-2 text-yellow-500" />
                    Player Of The Month Announced!
                </li>
            </ul>
        </div>
    )
}
export default AlertCard