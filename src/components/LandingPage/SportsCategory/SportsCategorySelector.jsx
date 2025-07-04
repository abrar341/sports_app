"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import SportCard from "./SportCard";
import { sportsData } from "./sportsData";

function SportsCategorySelector() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <section className="flex flex-col items-center px-5 py-10 mx-auto my-0 max-w-[1200px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <SectionHeader
          title="Choose Your Sport"
          subtitle="Explore live scores, upcoming games, and betting odds for your favorite sports."
        />

        <div className="w-full">
          <h2 className="mb-6 text-2xl font-bold text-center text-white">
            Category
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 mx-auto my-0 grid-cols-4  max-w-[1076px]  ">
            {sportsData.map((sport, index) => (
              <SportCard
                key={index}
                name={sport.name}
                imageUrl={sport.imageUrl}
                altText={sport.altText}
                value={sport.value}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SportsCategorySelector;
