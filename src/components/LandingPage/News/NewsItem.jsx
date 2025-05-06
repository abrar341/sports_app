import React from "react";
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";
import { setSelectedNewsItem } from "../../../slices/selectionSlice";
import { useDispatch } from "react-redux";

function NewsItem({ category, date, title, item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const parsedDate = new Date(date);
  const formattedDate = !isNaN(parsedDate)
    ? format(parsedDate, "MMMM d, yyyy 'at' h:mm a")
    : "Invalid date";

  const stylesByCategory = {
    soccer: {
      border: "border-l-4 border-primarySolid",
      hoverBg: "group-hover:bg-primarySolid",
    },
    american_football: {
      border: "border-l-4 border-primarySolid",
      hoverBg: "group-hover:bg-primarySolid",
    },
  };

  const { border, hoverBg } = stylesByCategory[category?.toLowerCase()] || {
    border: "border-l-4 border-primarySolid",
    hoverBg: "group-hover:bg-primarySolid",
  };

  const location = useLocation();
  const isNewsPage = location.pathname === "/news";

  return (
    <article
      onClick={() => {
        dispatch(setSelectedNewsItem(item));
        navigate("/news");
      }}
      className={`group flex items-center w-full rounded-xl transition duration-300 ease-in-out cursor-pointer`}
    >
      <div
        className={`flex gap-2 items-center w-full ${
          isNewsPage ? "bg-secondary" : "bg-slate-800"
        } p-3 ${
          isNewsPage ? "rounded-xl" : "rounded"
        } transition duration-300 ease-in-out ${border} ${hoverBg}`}
      >
        <div className="flex flex-col flex-1 gap-3">
          <p className="text-xs leading-3 text-white">
            #{category} - {formattedDate}
          </p>
          <h3 className="text-base font-semibold leading-6 text-white">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default NewsItem;
