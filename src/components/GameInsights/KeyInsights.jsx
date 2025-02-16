"use client";
import React from 'react';

export const KeyInsights = () => {
    return (
        <section className="mt-6 w-full max-md:max-w-full">
            <h2 className="text-3xl font-bold leading-none text-white max-md:max-w-full">
                KEY INSIGHTS:
            </h2>
            <div className="grid grid-cols-3 gap-4 items-center mt-6 max-md:max-w-full">
                <article className="flex overflow-hidden flex-col self-stretch pt-5 pr-2 pl-4 my-auto rounded-xl bg-slate-900 min-w-60 h-full text-neutral-50 wmax-md:max-w-full">
                    <div className="z-10 max-w-full w-[292px]">
                        <h3 className="text-xl font-bold">
                            Sharp money favors Team Y in tonight's game.
                        </h3>
                        <p className="mt-6 text-base">
                            Large bets on Team Y in betting markets.
                        </p>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6bcceb3b82613ef00ef3e333011a179574b4566dfba65fcec061bcf8f4d130"
                        className="object-contain self-end -mt-14 max-w-full aspect-[1.06] w-[214px]"
                        alt="Team Y betting trends"
                    />
                </article>

                <article className="overflow-hidden self-stretch pt-2 pr-2 pl-4 my-auto rounded-xl bg-slate-900 min-w-60 h-full  max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="mt-3 mr-0 text-neutral-50 max-md:mt-5">
                                <h3 className="text-xl font-bold">
                                    Odds for Team Z dropped from 3.5 to 2.8.
                                </h3>
                                <p className="mt-6 text-base">
                                    Team Z's chances are improving.
                                </p>
                            </div>
                        </div>
                        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ade162c8c28c91216938f5644ed21c7f762058eb20ae12a102ed79bd1abf5f2"
                                className="object-contain grow w-full aspect-[1.14] max-md:mt-2"
                                alt="Team Z odds trend"
                            />
                        </div>
                    </div>
                </article>

                <article className="flex overflow-hidden flex-col self-stretch px-4 pt-5 my-auto rounded-xl bg-slate-900 min-w-60 h-full text-neutral-50  max-md:max-w-full">
                    <div className="flex flex-col justify-center max-w-full w-[292px]">
                        <h3 className="text-xl font-bold">
                            Player X's form dipped in the last 3 matches
                        </h3>
                        <p className="mt-6 text-base">
                            Scored 1 goal in the last 5 games
                        </p>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/278a81500da920107d8996957c4e7a38761c3258d25882979167edb045671b9f"
                        className="object-contain z-10 self-end mt-0 max-w-full aspect-square w-[214px]"
                        alt="Player X performance chart"
                    />
                </article>
            </div>
        </section>
    );
};