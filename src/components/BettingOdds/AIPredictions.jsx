import React from 'react';

export const AIPredictions = () => {
    return (
        <section className="flex-1 shrink self-stretch w-full my-auto basis-0 min-w-60 max-md:max-w-full">
            <header className="flex px-2 flex-wrap gap-8 items-center w-full text-2xl font-bold leading-none max-md:max-w-full">
                <h2 className="flex-1 text-xl shrink self-stretch my-auto basis-0 max-md:max-w-full">
                    AI Predications
                </h2>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40614462285f53324a6704e19dcfdbc83fd2da5060d0e3114de9243722124c65?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[26px]"
                    alt="AI icon"
                />
            </header>
            <article className="flex overflow-hidden flex-col items-start pt-4 pr-20 pb-10 pl-5 mt-4 w-full text-lg font-medium rounded-lg bg-secondary max-md:px-5 max-md:max-w-full">
                <p>Player X is out due to injury.</p>
                <p className="mt-8 leading-6 w-[242px]">
                    Match A vs B delayed due to weather.
                </p>
                <p className="mt-6 leading-none">
                    Player of the Month announced!
                </p>
                <p className="mt-12 leading-none max-md:mt-10">
                    Player of the Month announced!
                </p>
            </article>
        </section>
    );
};