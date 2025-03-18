import React from "react";

function DevicePreview() {
    return (
        <div className="relative w-full  flex justify-center items-center">
            {/* Desktop/Tablet Preview */}
            <div className="relative w-[450px] -top-[7px] sm:-top-[0px] -right-[20px] md:-right-[0px] ">
                <img
                    src="/assets/Background2.png"
                    alt="Desktop Application Preview"
                    className="w-full h-full object-contain rounded-[13px] "
                />
            </div>

            {/* Mobile Preview (Overlapping Tablet) */}
            <div className=" relative -top-[25px] -left-[20px] md:-left-[40px]  w-[200px]  flex justify-center items-center">
                <img
                    src="/assets/Background1.png"
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
