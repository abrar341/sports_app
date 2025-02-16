"use client";

const TonightsHighlightWidget = () => {
    return (
        <section className="flex overflow-hidden w-full h-full flex-col grow shrink justify-center self-stretch px-4 py-5 my-auto rounded-[11.667px] bg-secondary min-w-60  max-md:max-w-full">
            <div className="min-h-[209px]">
                <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col justify-center w-full">
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-center text-white">
                                🏆 Tonight's Highlight
                            </h3>
                            <div className="flex gap-10 justify-between items-center mt-8 w-full text-lg tracking-tight text-neutral-50">
                                <div className="flex gap-2 items-center self-stretch my-auto">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/53bc6124691a7acb003f12035c3f84ce7ff8728b8ffb453a6401b4cd5eb7deb2?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[102px] w-[27px]"
                                        alt="Team A logo"
                                    />
                                    <span className="gap-2 self-stretch my-auto">Team A</span>
                                </div>
                                <span className="self-stretch my-auto">VS</span>
                                <div className="flex gap-3 items-center self-stretch my-auto">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aad5a734e9001f622adacd8084b99e09f2ff6d8d3cda01f4eebe0c0143dc4f66?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[102px] w-[27px]"
                                        alt="Team B logo"
                                    />
                                    <span className="self-stretch my-auto">Team B</span>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-4 w-full border border-solid border-neutral-100 border-opacity-30 min-h-px" />
                    </div>
                    <div className="mt-3.5 max-w-full text-neutral-50 w-[347px]">
                        <h4 className="text-2xl font-bold tracking-tight">Betting Odds:</h4>
                        <div className="flex gap-10 justify-between items-center mt-6 w-full text-lg tracking-tight">
                            <p className="self-stretch my-auto">Team A: 2.5</p>
                            <p className="self-stretch my-auto">Team B: 2.9</p>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-xs tracking-tight text-neutral-50">
                    Recommendation:
                    <br />
                    🟢 Bet on Team A to win based on form.
                </p>
            </div>
        </section>
    );
};

export default TonightsHighlightWidget;