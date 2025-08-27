import React, { useContext, useMemo } from "react";
import { BubblyLink } from "react-bubbly-transitions";
import ThemeContext from "../Context/ThemeContext";

// Memoized BlogCard component to prevent unnecessary re-renders
const BlogCard = React.memo(({ entry, isDarkModeEnabled }) => {
  // Memoize the colors to prevent recalculation
  const colors = useMemo(
    () => ({
      colorStart: isDarkModeEnabled ? "#003459" : "#00A8E8",
      colorEnd: isDarkModeEnabled ? "#000" : "#fff",
    }),
    [isDarkModeEnabled]
  );

  // Extract first 20 words for preview
  const previewContent = useMemo(() => {
    if (!entry.content) return "";
    const words = entry.content.split(" ");
    return words.length > 20
      ? `${words.slice(0, 20).join(" ")}...`
      : entry.content;
  }, [entry.content]);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="scale-90 hover:scale-100 hover:shadow-2xl hover:border-3 hover:border-[#00A8E8] transition ease-in-out duration-500 border my-2 border-gray-200 rounded-2xl flex flex-col mx-auto h-full">
        <div className="flex flex-col h-full">
          <img
            className="h-48 w-full object-cover inline-flex items-center justify-center bg-[#00A8E8] rounded-t-2xl"
            src={entry.mainImage}
            alt={entry.title}
          />
          <h3 className="px-4 text-2xl mt-3 mb-2 font-black text-gray-700 tracking-tight">
            <BubblyLink
              to={`/blog/${entry.entryID}`}
              colorStart={colors.colorStart}
              colorEnd={colors.colorEnd}
              duration={900}
            >
              <div className="text-black dark:text-white">{entry.title}</div>
            </BubblyLink>
          </h3>
          <p className="px-4 text-lg font-light text-black dark:text-white line-clamp-4 flex-grow">
            {previewContent}
          </p>
          <BubblyLink
            to={`/blog/${entry.entryID}`}
            colorStart={colors.colorStart}
            colorEnd={colors.colorEnd}
            duration={900}
          >
            <div className="inline-block mx-auto bg-[#00A8E8] hover:bg-[#007EA7] dark:bg-[#007EA7] dark:hover:bg-[#00A8E8] text-white my-3 py-3 px-6 border border-transparent rounded-md text-center font-medium">
              More Info
            </div>
          </BubblyLink>
        </div>
      </div>
    </div>
  );
});

const BlogEntryList = React.memo(({ blogEntries }) => {
  const { isDarkModeEnabled } = useContext(ThemeContext);

  if (!blogEntries || blogEntries.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          No blog entries found.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center w-full space-y-0">
      {blogEntries.map((entry) => (
        <BlogCard
          key={entry.entryID}
          entry={entry}
          isDarkModeEnabled={isDarkModeEnabled}
        />
      ))}
    </div>
  );
});

export default BlogEntryList;
