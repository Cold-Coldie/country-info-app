import React from "react";
import HomeCountryList from "../components/HomeCountryList";
import HomeSearch from "../components/HomeSearch";
import RegionFilter from "../components/RegionFilter";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 dark:text-gray-50 text-gray-700 w-screen h-screen">
      <div className="col-span-2 w-screen flex p-0 m-0">
        <div className="mt-32 mx-16 flex-col md:flex-row md:flex w-screen h-fit">
          <div className="md:w-1/2">
            <HomeSearch />
          </div>

          <div className="md:w-1/2 md:flex md:justify-end md:text-xs md:mt-0 mt-4 w-40">
            <RegionFilter />
          </div>
        </div>
      </div>

      <div className="">
        <HomeCountryList />
      </div>
    </div>
  );
};

export default Home;
