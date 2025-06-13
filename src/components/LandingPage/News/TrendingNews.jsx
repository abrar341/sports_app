"use client";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { getAmericanFootballNews, getSoccerNews } from "../../../Api/News/News";
import { EmptyState } from "../../Shared/EmptyState";
import { FaRegSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  setSelectedSport,
  setTrendingNews,
} from "../../../slices/newsSlice";
import { setSelectedNewsItem } from "../../../slices/selectionSlice";

function TrendingNews() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.trendingNews);
  const selectedSport = useSelector((state) => state.news.selectedSport);
  const [loading, setLoading] = useState(true);
  //   const [selectedSport, setSelectedSport] = useState("soccer"); // 'football' or 'soccer'

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      let data;

      if (selectedSport === "football") {
        data = await getAmericanFootballNews(1, 3);
      } else if (selectedSport === "soccer") {
        data = await getSoccerNews(1, 3);
      }

      if (data) {
        dispatch(setTrendingNews(data.data?.data || []));
      }

      setLoading(false);
    };

    fetchNews();
  }, [selectedSport]);

  return (
    <section className="overflow-hidden w-full bg-slate-900  px-2">
      {/* <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ddb7356d39c1d16d6f5c494e0dc42007a30fe50"
        alt="Abstract Shape"
        className="w-[1135px] h-[540px] transform rotate-[8.109deg] absolute left-[-457px] top-[-83px]"
      /> */}
      {/* <div className="flex justify-between gap-5 items-center px-16 py-12 max-md:px-8 max-sm:flex-col max-sm:gap-8 max-sm:px-4"> */}

      <div className="flex justify-center gap-5 items-center px-16 py-6 max-md:px-8 max-sm:flex-col max-sm:gap-8 max-sm:px-4">
        <div className=" w-full flex flex-col gap-5 items-start max-w-[600px] max-sm:max-w-full">
          <h1 className="text-3xl px-3  w-full font-bold leading-normal text-white capitalize max-md:text-xl max-sm:text-2xl">
            trending news
          </h1>
          <div className="flex w-full gap-3 px-3">
            <button
              onClick={() => {
                dispatch(setSelectedSport("soccer"));
                dispatch(setPage(1));
                dispatch(setSelectedNewsItem(null));
              }}
              className={`px-4 w-full py-2 rounded-full text-white ${
                selectedSport === "soccer" ? "bg-blue-700" : "bg-slate-700"
              }`}
            >
              Soccer
            </button>
            <button
              onClick={() => {
                dispatch(setSelectedSport("football"));
                dispatch(setPage(1));
                dispatch(setSelectedNewsItem(null));
              }}
              className={`px-4 w-full py-2 rounded-full text-white ${
                selectedSport === "football" ? "bg-blue-700" : "bg-slate-700"
              }`}
            >
              Football
            </button>
          </div>
          {loading ? (
            <div className="flex  rounded-xl  w-full h-full justify-center items-center py-4">
              <div className="w-6 h-6 border-4 border-primarySolid border-t-secondary rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 items-start w-full">
              {news.length > 0 ? (
                news.map((item) => (
                  <NewsItem
                    key={item._id}
                    image={item.image || ""}
                    category={item.gameName}
                    date={item.newsDate || ""}
                    title={item.title}
                    item={item}
                  />
                ))
              ) : (
                <div className="rounded-xl w-full h-full">
                  <EmptyState icon={FaRegSadTear} message="No News found." />;
                </div>
              )}
            </div>
          )}

          {news.length > 0 && (
            <button
              onClick={() => navigate("/news")}
              className="flex justify-center items-center h-11 w-full text-lg mt-4 text-white capitalize bg-blue-800 cursor-pointer rounded-[100px] w-[345px] max-sm:w-full"
            >
              see all
            </button>
          )}
        </div>

        {/* <FeaturedNews
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/8dc76987ba6f153b3b5470d7b2f69d651fa296ba"
                    author="Debits"
                    date="06 July 2024"
                    title="DISCOVER THE MEMBER BENEFITS OF USA support!"
                /> */}
      </div>
    </section>
  );
}

export default TrendingNews;
