import api from "../api";

export const createCheckoutSession = async (email, priceId, autoRenewal, subscriptionPlan) => {
    try {
        const res = await api.post("/stripe/create-checkout-session", {
            email,
            priceId,
            autoRenewal,
            subscriptionPlan
        });
        // email, priceId, autoRenewal
        return res.data;
    } catch (error) {
        console.log("error", error);
        // return null; // Retur/n null to handle errors gracefully in the UI
        throw error;
    }
};

export const cancelSubscription = async (email) => {
    try {
        const res = await api.post("/stripe/cancel-subscription", { email });
        return res.data;
    } catch (error) {
        console.log("error", error);
        // return null; // Return null to handle errors gracefully in the UI
        throw error;
    }
};
