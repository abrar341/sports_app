import React from "react";

function NewsItem({ image, category, author, date, title }) {
    return (
        <article className="flex items-center px-3 w-full rounded-xl bg-slate-900">
            <div className="flex gap-2 items-center w-full">
                <img
                    src={image}
                    alt={category}
                    className="w-[70px] h-[70px] rounded-full"
                />
                <div className="flex flex-col flex-1 gap-3">
                    <p className="text-xs leading-3 text-white">
                        #{category}. {author} - {date}
                    </p>
                    <h3 className="text-base font-semibold leading-5 text-white">
                        {title}
                    </h3>
                </div>
            </div>
        </article>
    );
}

export default NewsItem;
