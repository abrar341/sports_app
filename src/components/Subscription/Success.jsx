import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";


const Success = () => {
    const { sessionId } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState("Payment Successful! Thank you for subscribing.");

    useEffect(() => {
        if (!sessionId) {
            navigate("/dashboard"); // Redirect if no session ID
        }
    }, [sessionId, navigate]);

    return (
        <div className="flex bg-primary flex-col items-center justify-center min-h-screen">
            <div className="p-6 bg-secondary rounded-xl">
                <h1 className="text-2xl mb-2 self-center flex items-center justify-center text-white font-bold text-center text-green-600"><TiTick className="h-10 w-10" /></h1>
                <h1 className="text-2xl mb-4 text-gray-300 font-bold">{message}</h1>
                <p className="text-gray-400">user ID: {sessionId}</p>
            </div>
        </div>
    );
};

export default Success;
