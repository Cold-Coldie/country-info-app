import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RegionSearchContext } from "../hooks/RegionSearchContext";
import { SearchContext } from "../hooks/SearchContext";
import UseFetch from "../hooks/UseFetch";

const HomeCountryList = () => {
  const { search } = useContext(SearchContext);
  const { region } = useContext(RegionSearchContext);

  const [url, setUrl] = useState(region);

  useEffect(() => {
    if (search === "") {
      setUrl(region);
    } else {
      setUrl("https://restcountries.com/v2/name/" + search);
    }
  }, [search, region, url, setUrl]);

  const { data: countries, isPending, error } = UseFetch(url);

  return (
    <div className="w-screen p-5 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-50">
      <div className="text-center mt-7">
        {isPending && <div>Loading...</div>}
      </div>
      <div className="text-center mt-7">{error && <div>{error}</div>}</div>

      <div className="flex flex-wrap justify-around gap-5 mx-7">
        {countries &&
          countries.map((country) => (
            <Link to={`/country/${country.alpha2Code}`}>
              <div
                className="w-52 h-64 shadow-md rounded-md overflow-hidden m-4 dark:bg-gray-700 bg-white my-8 cursor-pointer"
                key={country.alpha2code}
              >
                <img
                  className="w-52 h-28"
                  src={country.flags.png}
                  alt="country flag"
                />
                <div className="p-5">
                  <div className="text-sm font-semibold py-2">
                    <h1>{country.name}</h1>
                  </div>

                  <div className="text-xs mt-3">
                    <p>
                      Population:
                      <span className="font-thin ml-1">
                        {parseInt(country.population).toLocaleString()}
                      </span>
                    </p>
                    <p>
                      Region:
                      <span className="font-thin"> {country.region}</span>
                    </p>
                    <p>
                      Capital:{" "}
                      <span className="font-thin">{country.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomeCountryList;
