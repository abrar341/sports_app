import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NewsDetailItem from "./NewsDetailItem";
import NewsItem from "./NewsItem";
import Loading from "../../Shared/Loading";
import { FaAngleLeft, FaAngleRight, FaRegSadTear } from "react-icons/fa";
import { setSelectedNewsItem } from "../../../slices/selectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { EmptyState } from "../../Shared/EmptyState";
import {
  setAllNews,
  setPage,
  setSelectedSport,
  setTotalPages,
} from "../../../slices/newsSlice";
import { getAmericanFootballNews, getSoccerNews } from "../../../Api/News/News";

const NewsPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { selectedNews } = useSelector((state) => state.selection); // Access Redux state

  const news = useSelector((state) => state.news.allNews);
  const page = useSelector((state) => state.news.page);
  const totalPages = useSelector((state) => state.news.totalPages);
  const selectedSport = useSelector((state) => state.news.selectedSport);

  const fetchNews = async () => {
    setLoading(true);
    try {
      //   const res = await getSoccerNews(page, 4);

      let res;

      if (selectedSport === "football") {
        res = await getAmericanFootballNews(page, 4);
      } else if (selectedSport === "soccer") {
        res = await getSoccerNews(page, 4);
      }
      const json = await res;

      dispatch(setAllNews(json.data.data || []));
      !selectedNews && dispatch(setSelectedNewsItem(json.data.data[0]));
      dispatch(setTotalPages(json.data.totalPages || 1));
      dispatch(setPage(json.data.currentPage || 1));
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page, selectedSport]);

  return (
    <div className="px-6 py-4 flex flex-col text-white mx-auto gap-4">
      <div className="flex self-end w-full md:w-1/3 gap-3 px-1">
        <button
          onClick={() => {
            dispatch(setSelectedSport("soccer"));
            dispatch(setPage(1));
            dispatch(setSelectedNewsItem(null));
          }}
          className={`px-4 w-full py-2 rounded-full text-white ${
            selectedSport === "soccer" ? "bg-blue-700" : "bg-searchBarBg"
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
            selectedSport === "football" ? "bg-blue-700" : "bg-searchBarBg"
          }`}
        >
          Football
        </button>
      </div>
      <h2 className="text-2xl font-bold mx-2 mb-2">
        {selectedSport === "soccer" ? "Soccer" : "Football"} News
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        {/* Left side - News list */}
        <div className={`w-full ${news.length > 0 && "md:w-1/2"} rounded-lg`}>
          {loading ? (
            <div className="h-full">
              <Loading />
            </div>
          ) : (
            <div className="flex flex-col  justify-between h-full">
              <div className="flex flex-col gap-4">
                {news.length > 0 ? (
                  news.map((item) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => {
                        // setSelectedNews(item)
                        dispatch(setSelectedNewsItem(item));
                      }} // Set full news
                      className="cursor-pointer"
                    >
                      <NewsItem
                        image={item.image || ""}
                        category={item.gameName}
                        date={item.newsDate || ""}
                        title={item.title}
                        item={item}
                      />
                    </motion.div>
                  ))
                ) : (
                  <div className="rounded-xl w-full h-full">
                    <EmptyState icon={FaRegSadTear} message="No News found." />
                  </div>
                )}
              </div>
              {/* Pagination */}
              {news.length > 0 && (
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={() => dispatch(setPage(Math.max(page - 1, 1)))}
                    disabled={page === 1}
                    className="p-2 text-white rounded disabled:opacity-50"
                  >
                    <FaAngleLeft />
                  </button>
                  <span className="text-sm text-gray-300">
                    {page} / {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(setPage(Math.min(page + 1, totalPages)))
                    }
                    disabled={page === totalPages}
                    className="p-2 text-white rounded disabled:opacity-50"
                  >
                    <FaAngleRight />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right side - Selected News */}
        {news.length > 0 && selectedNews && (
          <div className="w-full md:w-2/3 h-full bg-secondary rounded-xl">
            {selectedNews ? (
              <motion.div
                key={selectedNews._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NewsDetailItem
                  image={selectedNews.image || ""}
                  category={selectedNews.gameName}
                  date={selectedNews.newsDate || ""}
                  title={selectedNews.title}
                  description={selectedNews.description}
                  sources={selectedNews.sources}
                  loading={loading}
                />
              </motion.div>
            ) : (
              <p className="text-center p-4 h-full text-gray-400">
                Select a news item to see the details...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
