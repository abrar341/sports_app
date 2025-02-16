"use client";

const LeagueStatsWidget = () => {
    return (
        <section className="flex overflow-hidden flex-col h-full justify-center self-stretch px-4 py-5 my-auto rounded-[11.667px] bg-secondary min-w-60 text-neutral-50  max-md:max-w-full">
            <div className="min-h-[140px]">
                <div className="flex flex-col justify-center w-full text-sm font-bold tracking-tight">
                    <div className="flex gap-2 items-center self-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac3762cffb286dfba916cd3ed36a7fb8011e4c801d66031b4cf25556c0d9dbf?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square rounded-[102px]"
                            alt="La Liga logo"
                        />
                        <h3 className="self-stretch my-auto">La Liga</h3>
                    </div>
                    <hr className="mt-3 w-full border border-solid border-neutral-100 min-h-px" />
                </div>
                <div className="mt-8 max-w-full text-xl tracking-tight min-h-[60px] w-[299px]">
                    <p>
                        <span className="font-['Lato'] text-white">Current Leader: </span>
                        <span className="font-['Lato'] text-[#0147B9]">Barcelona.</span>
                    </p>
                    <p className="mt-8">
                        <span className="font-['Lato'] text-white">Top Scorer: </span>
                        <span className="font-['Lato'] text-[#0147B9]">
                            Player Y with 15 goals.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LeagueStatsWidget;