import React from "react";
import notchImage from "./Background1.png"; // Adjust path

function PhoneNotch() {
    return (
        <img
            src={notchImage}
            alt="Phone Notch"
            className="w-full h-full object-cover"
        />
    );
}

export default PhoneNotch;
