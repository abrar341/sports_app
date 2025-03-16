import React from "react";
import myDesktopImage from "./Background2.png"; // Tablet/Desktop Preview Image
import myMobileImage from "./Background1.png";  // Mobile Application Preview Image

function DevicePreview() {
    return (
        <div className="relative w-full  flex justify-center w-full items-center">
            {/* Desktop/Tablet Preview */}
            <div className="relative w-[450px] ">
                <img
                    src={myDesktopImage}
                    alt="Desktop Application Preview"
                    className="w-full h-full object-contain rounded-[13px] "
                />
            </div>

            {/* Mobile Preview (Overlapping Tablet) */}
            <div className=" relative -top-[25px] -left-[40px]  w-[200px]  flex justify-center items-center">
                <img
                    src={myMobileImage}
                    alt="Mobile Application Preview"
                    className="  object-contain "
                />

                {/* Simulated Notch */}
                {/* <div className="absolute top-[27px] left-[147px] w-[94px] h-[26px] bg-black/60 rounded-full"></div> */}
            </div>
        </div>
    );
}

export default DevicePreview;
