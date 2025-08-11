const SubscriptionData = [
  {
    planName: "Trial Plan",
    price: "Free",
    duration: "/ 7 days", // Adjust duration as needed
    priceId: null, // No price ID for a free trial
    features: [
      "Access to 3 props & games per day",
      "Limited trending insights (e.g., weekly highlights only)",
      "View-only sample bet slips (non-shareable)",
    ],
    buttonText: "Start Trial",
    isActive: true, // Set active to true for trial mode
    subscriptionPlan: "trial",
  },
  {
    planName: "Standard Plan",
    price: "$100.00",
    duration: "/ 6 months",
    priceId: import.meta.env.VITE_SIXMONTHS_PRICE_ID, // Fetch from .env
    features: [
      "Unlimited props & games",
      "Full trending insights (updated daily)",
      "Shareable bet slips",
      "Sharp book odds access (basic format)",
    ],
    buttonText: "Get Started",
    isActive: false,
    subscriptionPlan: "six_months",
  },
  {
    planName: "Basic Plan",
    price: "$2.00",
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
    subscriptionPlan: "monthly",
  },
  {
    planName: "Premium Plan",
    price: "$200.00",
    duration: "/ 1 year",
    priceId: import.meta.env.VITE_YEARLY_PRICE_ID, // Fetch from .env
    features: [
      "All Standard Plan features",
      "Full advanced data visualizations (graphs, historical analysis)",
      "Custom bet slip builder with export options",
      "Early access to premium insights/tools",
      "Priority support and live chat",
    ],
    buttonText: "Get Started",
    isActive: false,
    subscriptionPlan: "yearly",
  },
];

export default SubscriptionData;
