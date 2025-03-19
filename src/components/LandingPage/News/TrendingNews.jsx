"use client";
import React from "react";
import NewsItem from "./NewsItem";
import FeaturedNews from "./FeaturedNews";

function TrendingNews() {
    const newsItems = [
        {
            id: 1,
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/cdaf3ef237f2903bdf5d796c2f90975c624349b0",
            category: "Cricket",
            author: "Toni",
            date: "27 July 2024",
            title: "Ireland Tour of England Test 2024",
        },
        {
            id: 2,
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/c677b552fc410670385073b4e9154ed8f70494d6",
            category: "Goft",
            author: "Toni",
            date: "20 July 2024",
            title: "Open Championship Royal Liverpool Golf",
        },
        {
            id: 3,
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/70d8a0fd7caee95095644bb09ceed83f1b1bfb53",
            category: "Pollar",
            author: "87",
            date: "12 July 2024",
            title: "Baku 2024 Taekwondo Championships",
        },
    ];

    return (
        <section className="overflow-hidden relative w-full bg-slate-900  px-2">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ddb7356d39c1d16d6f5c494e0dc42007a30fe50"
                alt="Abstract Shape"
                className="w-[1135px] h-[540px] transform rotate-[8.109deg] absolute left-[-457px] top-[-83px]"
            />

            <div className="flex justify-between gap-5 items-center px-16 py-12 max-md:px-8 max-sm:flex-col max-sm:gap-8 max-sm:px-4">
                <div className=" w-full flex flex-col gap-5 items-start max-w-[422px] max-sm:max-w-full">
                    <h1 className="text-3xl px-3  w-full font-bold leading-normal text-white capitalize max-md:text-xl max-sm:text-2xl">
                        trending news
                    </h1>

                    <div className="flex flex-col gap-6 items-start w-full">
                        {newsItems.map((item) => (
                            <NewsItem
                                key={item.id}
                                image={item.image}
                                category={item.category}
                                author={item.author}
                                date={item.date}
                                title={item.title}
                            />
                        ))}
                    </div>

                    <button className="h-12 text-lg mt-4 leading-normal text-center text-white capitalize bg-blue-800 cursor-pointer rounded-[100px] w-[345px] max-sm:w-full">
                        see all
                    </button>
                </div>

                <FeaturedNews
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/8dc76987ba6f153b3b5470d7b2f69d651fa296ba"
                    author="Debits"
                    date="06 July 2024"
                    title="DISCOVER THE MEMBER BENEFITS OF USA support!"
                />
            </div>
        </section>
    );
}

export default TrendingNews;
