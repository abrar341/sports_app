const SubscriptionData = [
    {
        planName: "Standard Plan",
        price: "$30.00",
        duration: "/ 6 months",
        priceId: import.meta.env.VITE_SIXMONTHS_PRICE_ID, // Fetch from .env
        features: [
            "Thousands of Props & Games",
            "Trending Insights",
            "Shareable Betslips",
            "Sharp Book Odds",
            "Advanced Data & Visuals",
        ],
        buttonText: "Get Started",
        isActive: false,
        subscriptionPlan: "six_months"
    },
    {
        planName: "Basic Plan",
        price: "$20.99",
        duration: "/ month",
        priceId: import.meta.env.VITE_MONTHLY_PRICE_ID, // Fetch from .env
        features: [
            "Thousands of Props & Games",
            "Trending Insights",
            "Shareable Betslips",
            "Sharp Book Odds",
            "Advanced Data & Visuals",
        ],
        buttonText: "Get Started",
        isActive: true, // Highlighted card
        subscriptionPlan: "monthly"

    },
    {
        planName: "Premium Plan",
        price: "$40.00",
        duration: "/ 1 year",
        priceId: import.meta.env.VITE_YEARLY_PRICE_ID, // Fetch from .env
        features: [
            "Thousands of Props & Games",
            "Trending Insights",
            "Shareable Betslips",
            "Sharp Book Odds",
            "Advanced Data & Visuals",
        ],
        buttonText: "Get Started",
        isActive: false,
        subscriptionPlan: "yearly"

    },
];

export default SubscriptionData;
