"use client";

const AlertsWidget = () => {
    return (
        <section className="overflow-hidden grow shrink  px-4 pt-5 pb-32 rounded-lg bg-slate-900 min-w-60 w-[258px] max-md:pb-24 w-full">
            <div className="w-full">
                <header className="flex gap-10 justify-between items-center w-full">
                    <div className="flex gap-2 items-center self-stretch my-auto text-xl font-bold text-white whitespace-nowrap">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4153e482589e650cc2fd059cece30b94226525b8bc00b7670b340a177532cbe4?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            alt="Alerts icon"
                        />
                        <h2 className="self-stretch my-auto">Alerts</h2>
                    </div>
                    <time className="self-stretch my-auto text-sm text-white text-opacity-50">
                        2 hours ago
                    </time>
                </header>

                <div className="mt-3 w-full text-lg font-medium text-white min-h-[172px]">
                    <div className="flex gap-2 justify-between items-center w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6042ad2f9715abc7135e93a6fbb9c84ae5e848e5da80a2d726ce6317e34075a5?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            alt="Injury alert icon"
                        />
                        <p className="self-stretch my-auto w-[258px]">
                            Player X is out due to injury.
                        </p>
                    </div>

                    <div className="flex gap-2 justify-between items-center mt-3 w-full leading-6">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9d74e8fcfa37c8f15e139402de6eef1a72bab39c44f2763e545b50cb56c0c1c?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                            alt="Weather delay icon"
                        />
                        <p className="self-stretch my-auto w-[252px]">
                            Match A vs B delayed due to weather.
                        </p>
                    </div>

                    <div className="flex gap-2 justify-between items-center mt-9 w-full leading-6">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81940e3f7b17cdc10218a2c628eb3004dec53a3bf893ee6c5cf8a71f867a4d83?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                            alt="Award icon"
                        />
                        <p className="self-stretch my-auto w-[252px]">
                            Player of the Month announced!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlertsWidget;