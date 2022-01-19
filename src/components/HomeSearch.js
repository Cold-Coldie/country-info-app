import React, { useContext, useState } from "react";
import { SearchContext } from "../hooks/SearchContext";

const HomeSearch = () => {
  // const [search, setSearch] = useState("");
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div>
      <form className="flex">
        <div className="flex items-center">
          <input
            className="dark:bg-gray-700 dark:text-gray-50 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500
                  h-10 w-64 md:w-80 text-xs rounded shadow px-10 mr-0 transform md:translate-x-0"
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <div className="transform -translate-x-60 md:-translate-x-72 md:relative md:right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700 dark:text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomeSearch;
