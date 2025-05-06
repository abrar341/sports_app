import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import Loading from "../../Shared/Loading";

function NewsDetailItem({
  image,
  category,
  date,
  title,
  description,
  onClick,
  isSelected,
  sources,
  loading,
}) {
  const [expanded, setExpanded] = useState(true);

  const parsedDate = new Date(date);
  const formattedDate = !isNaN(parsedDate)
    ? format(parsedDate, "MMMM d, yyyy 'at' h:mm a")
    : "Invalid date";

  const toggleDescription = () => setExpanded((prev) => !prev);
  const maxLength = 150;

  return (
    <motion.div
      className={`group flex flex-col w-full h-full rounded-xl p-5 cursor-pointer transition-all duration-300 ease-in-out bg-secondary ${
        isSelected
          ? "border-primarySolid ring-2 ring-primarySolid shadow-[0_0_15px_#3b82f6]"
          : " border-gray-700"
      }`}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-400">
          #{category} · {formattedDate}
        </p>

        <h3 className="text-xl font-semibold text-white leading-snug">
          {title}
        </h3>

        {description && (
          <AnimatePresence initial={false}>
            <motion.p
              className="text-sm text-gray-300 mt-1 leading-6 overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: expanded ? "auto" : 0 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {expanded
                ? description
                : `${description.slice(0, maxLength)}${
                    description.length > maxLength ? "..." : ""
                  }`}
            </motion.p>
          </AnimatePresence>
        )}

        {/* {description && description.length > maxLength && (
                    <button
                        className="mt-1 text-xs text-blue-400 hover:text-blue-300 w-fit underline"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleDescription();
                        }}
                    >
                        {expanded ? "Show Less" : "Read More"}
                    </button>
                )} */}

        {sources?.length > 0 && (
          <ul className="mt-3 flex flex-col gap-1">
            {sources.map((src, index) => (
              <li key={index}>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm break-all"
                >
                  {src}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default NewsDetailItem;
