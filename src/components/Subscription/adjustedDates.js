const getAdjustedDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString();
};

export const plans = {
    six_months: getAdjustedDate(6 * 30), // 6 months (approx 180 days)
    yearly: getAdjustedDate(12 * 30),    // 1 year (approx 360 days)
    monthly: getAdjustedDate(30),       // 1 month (approx 30 days)
};

console.log(plans); // Example usage

