"use client";

const PlayerPredictionWidget = () => {
    return (
        <section className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-4 py-8 my-auto rounded-[11.667px] bg-secondary min-w-60  w-full h-full max-md:max-w-full">
            <div className="min-h-[185px]">
                <div className="flex flex-col justify-between w-full text-xl font-bold text-white min-h-[113px]">
                    <div className="flex flex-col self-center w-56 max-w-full">
                        <h3>⚽ Player Y likely to score</h3>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ee311d38c82e53c0bbb1f5ff146aaca3a7f2fea6f4d52c8c7a1527179612282?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            className="object-contain self-center mt-6 rounded-full aspect-square w-[60px]"
                            alt="Player Y"
                        />
                    </div>
                    <hr className="mt-3.5 w-full border border-solid border-neutral-100 border-opacity-30 min-h-px" />
                </div>
                <div className="flex flex-col justify-center mt-7 max-w-full text-base tracking-tight text-neutral-50 w-[265px]">
                    <p>Prediction: 75% chance of scoring</p>
                    <p className="mt-6">📈 Based on recent performance trends</p>
                </div>
            </div>
        </section>
    );
};

export default PlayerPredictionWidget;