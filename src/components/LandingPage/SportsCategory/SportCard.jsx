import React from "react";

function SportCard({ name, imageUrl, altText }) {
    return (
        <article className="flex flex-col gap-6 items-center p-6 rounded-lg bg-slate-900 max-sm:w-full w-[200px]">
            <div className="flex justify-center items-center rounded-full bg-slate-900 h-[80px] w-[80px]">
                <img
                    src={imageUrl}
                    className="object-cover w-16"
                    alt={altText || name}
                />
            </div>
            <h3 className="text-xl text-center font-semibold text-white capitalize">{name}</h3>
        </article>
    );
}

export default SportCard;
