import React from "react";

function FeaturedNews({ image, author, date, title }) {
    return (
        <article className="relative max-w-[805px] max-md:max-w-full max-sm:w-full">
            <img
                src={image}
                alt="Featured News"
                className="w-full h-[350px] rounded-[24px] object-cover"
            />
            <div className="flex absolute bottom-6 left-6 flex-col gap-4 max-w-[509px] max-sm:bottom-4 max-sm:left-4">
                <p className="text-lg leading-5 text-white">
                    {author} - {date}
                </p>
                <h2 className="text-2xl font-extrabold leading-10 text-white capitalize max-md:text-xl max-md:leading-10 max-sm:text-xl max-sm:leading-8">
                    {title}
                </h2>
            </div>
        </article>
    );
}

export default FeaturedNews;
