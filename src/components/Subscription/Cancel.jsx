import { useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";

const Cancel = () => {
    const { sessionId } = useParams();

    return (
        <div className="flex bg-primary flex-col items-center justify-center min-h-screen">
            <div className="p-6 rounded-xl bg-secondary ">
                <h1 className="text-2xl mb-3 font-bold text-red-600 flex justify-center w-full "><ImCross className="w-6 h-6" /></h1>
                <h1 className="text-2xl font-bold text-gray-300 text-center">Payment Canceled</h1>
                <p className="text-gray-300 mt-2 text-gray-400">You did not complete the payment. Try again later.</p>
                <p className="text-gray-300 mt-2 text-gray-400">User ID: {sessionId}</p>

            </div>
        </div>
    );
};

export default Cancel;
