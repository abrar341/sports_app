"use client";

const TrendingInsightCard = ({ title, description, imageSrc, imagePosition = "right" }) => {
    return (
        <section className="flex overflow-hidden flex-col self-stretch pt-5 pr-2 pl-4 my-auto rounded-[11.667px] bg-secondary min-w-60 text-neutral-50  w-full h-full  max-md:max-w-full">
            <div className="z-10 max-w-full w-[292px]">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-6 text-base">{description}</p>
            </div>
            {imageSrc && (
                <img
                    loading="lazy"
                    src={imageSrc}
                    className={`object-contain self-end -mt-14 max-w-full aspect-[1.06] w-[214px]`}
                    alt="Trend visualization"
                />
            )}
        </section>
    );
};

export default TrendingInsightCard;