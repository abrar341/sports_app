"use client";

const TeamStatsWidget = () => {
    return (
        <section className="flex overflow-hidden flex-col justify-center self-stretch px-4 py-5 my-auto rounded-[11.667px] bg-secondary min-w-60 h-full  max-md:max-w-full">
            <div className="w-full min-h-[140px]">
                <div className="w-full">
                    <div className="flex flex-col justify-center w-full">
                        <div className="flex gap-2 items-center self-start text-sm font-bold tracking-tight text-neutral-50">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c655586073537e51bf38002817b8f6a322032f0722a611096fb12393f902b131?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square rounded-[102px]"
                                alt="Team Barcelona logo"
                            />
                            <h3 className="self-stretch my-auto">Team Barcelona</h3>
                        </div>
                        <div className="flex flex-col mt-3 w-full rounded max-w-[406px]">
                            <div className="px-5 w-full rounded bg-stone-50">
                                <div className="flex pr-16 bg-sky-400 rounded max-md:pr-5">
                                    <div className="flex z-10 flex-col items-start bg-red-400 rounded max-md:mr-0">
                                        <div className="flex shrink-0 h-2.5 bg-green-400 rounded w-[104px]" />
                                    </div>
                                    <div className="flex shrink-0 h-2.5 bg-amber-200 rounded w-[108px]" />
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between self-center mt-1 max-w-full text-xs font-semibold tracking-normal text-white whitespace-nowrap w-[362px]">
                                <span>W</span>
                                <span>W</span>
                                <span>L</span>
                                <span>W</span>
                                <span>W</span>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3 w-full border border-solid border-neutral-100 min-h-px" />
                </div>
                <div className="flex gap-10 justify-between items-center mt-2.5 w-full tracking-normal whitespace-nowrap min-h-[45px]">
                    <div className="self-stretch my-auto">
                        <h4 className="text-sm text-blue-800">Draws</h4>
                        <p className="mt-2 text-base font-semibold text-red-500">#1</p>
                    </div>
                    <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-100 h-[35px]" />
                    <div className="self-stretch my-auto w-[79px]">
                        <h4 className="text-sm text-blue-800">Wins</h4>
                        <p className="mt-2 text-base font-semibold text-neutral-50">9</p>
                    </div>
                    <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-100 h-[35px]" />
                    <div className="self-stretch my-auto">
                        <h4 className="text-sm text-blue-800">Losses</h4>
                        <p className="mt-2 text-base font-semibold text-neutral-50">2</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamStatsWidget;