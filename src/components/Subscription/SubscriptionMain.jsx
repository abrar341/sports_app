import { useLocation } from "react-router-dom";
import Header from "../Header&Footer/Header";
import Subscription from "./Subscription";




const SubscriptionMain = () => {

    const location = useLocation();
    const isSubscriptionPage = location.pathname === "/subscription";
    return (
        <div className={`min-h-screen ${isSubscriptionPage ? "bg-primary" : ""}`}>
            <div>
                < Subscription />
            </div>
        </div>
    )
}
export default SubscriptionMain;