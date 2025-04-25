"use client";
import React from "react";
import FeatureButton from "./FeatureButton";
import PlayButton from "./PlayButton";
import DevicePreview from "./DevicePreview";
// import BackgroundSVG from "./BackgroundSVG";

function HeroSection() {
    return (
        <>
            {/* <BackgroundSVG /> */}

            <section className="flex z-10 pt-2 flex-col gap-10 items-center w-full min-h-[screen]">
                <header className="flex flex-col gap-5 items-center px-5 pt-10 w-full">
                    <div className="flex flex-col gap-3 justify-center items-center w-full max-w-[1240px]">
                        <h1 className="text-4xl font-bold text-center text-white leading-[60px] max-md:text-4xl max-md:leading-[45px] max-sm:text-4xl max-sm:leading-[45px]">
                            AI-Powered Sports Analytics for Smarter Bets.
                        </h1>
                        <p className="text-lg text-center max-w-[854px] text-zinc-300 max-md:text-xl max-sm:text-base">
                            Smarter Predictions. Better Bets. Winning Insights.
                        </p>
                    </div>
                    <div className="flex gap-4 md:gap-10 justify-center items-center max-sm:flex-col">
                        <FeatureButton />
                        <PlayButton />
                    </div>
                </header>
                <DevicePreview />
            </section>
        </>
    );
}

export default HeroSection;
