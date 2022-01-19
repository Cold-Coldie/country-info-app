import React, { useContext, useEffect, useState } from "react";
import { RegionSearchContext } from "../hooks/RegionSearchContext";

const RegionFilter = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { region, setRegion } = useContext(RegionSearchContext);

  const itemsList = [
    {
      name: "Africa",
      value: "https://restcountries.com/v2/region/africa",
    },
    {
      name: "America",
      value: "https://restcountries.com/v2/region/america",
    },
    {
      name: "Asia",
      value: "https://restcountries.com/v2/region/asia",
    },
    {
      name: "Europe",
      value: "https://restcountries.com/v2/region/europe",
    },
    {
      name: "Oceania",
      value: "https://restcountries.com/v2/region/oceania",
    },
    {
      name: "none",
      value: "https://restcountries.com/v2/all",
    },
  ];

  const [selectedItemindex, setSelectedItemIndex] = useState(null);

  useEffect(() => {
    setRegion(
      selectedItemindex !== null
        ? itemsList[selectedItemindex].value
        : "https://restcountries.com/v2/all"
    );
  }, [selectedItemindex]);

  return (
    <div className="cursor-pointer">
      <div
        className="bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-50 rounded shadow h-10 w-48 md:w-40 pl-4 flex items-center text-sm"
        onClick={(e) => {
          setDropDownOpen(!dropDownOpen);
        }}
      >
        {selectedItemindex !== null
          ? itemsList[selectedItemindex].name
          : "Filter by Region"}

        <div className="ml-auto mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {dropDownOpen ? (
        <div
          className="bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-50 mt-1 rounded shadow-md p-2"
          onClick={(e) => setDropDownOpen(!dropDownOpen)}
        >
          {itemsList.map((item, index) => (
            <div
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
              key={item.value}
              onClick={(e) => {
                setSelectedItemIndex(index);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RegionFilter;
