import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";

const CountryDetails = () => {
  const { alpha2Code } = useParams();

  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  const url = "https://restcountries.com/v2/alpha/" + alpha2Code;

  const { data: country, isPending, error } = UseFetch(url);

  return (
    <div className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-50 w-screen h-screen">
      <div className="absolute mt-20">
        <div className="text-center mt-7">
          {isPending && <div>Loading...</div>}
        </div>

        <div className="text-center mt-7">{error && <div>{error}</div>}</div>

        <div className=" grid md:flex w-screen px-10 md:px-20">
          <div className="md:w-1/2 grid">
            <div
              className="flex items-center bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-50 w-fit rounded shadow-md px-3 py-1 cursor-pointer"
              onClick={handleBack}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>Back</div>
            </div>

            <div>
              {country && (
                <div className="mt-8">
                  <img
                    className="h-64 w-72 md:h-72 md:w-96"
                    src={country.flags.png}
                    alt="country flag"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/2">
            {country && (
              <div className="mt-5 md:mt-28">
                <div className="text-xl font-bold mb-5">{country.name}</div>
                <div className=" grid md:flex text-sm mb-10">
                  <div>
                    <div>
                      <span className="font-medium">Native Name: </span>
                      <span className="font-light">{country.nativeName}</span>
                    </div>
                    <div>
                      <span className="font-medium">Population: </span>
                      <span className="font-light">
                        {parseInt(country.population).toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Region: </span>
                      <span className="font-light">{country.region}</span>
                    </div>
                    <div>
                      <span className="font-medium">Subregion: </span>
                      <span className="font-light">{country.subregion}</span>
                    </div>
                    <div>
                      <span className="font-medium">Capital: </span>
                      <span className="font-light">{country.capital}</span>
                    </div>
                  </div>
                  <div className="mt-10 md:mt-0 md:ml-32">
                    <div>
                      <span className="font-medium">Top Level Domain: </span>
                      <span className="font-light">
                        {country.topLevelDomain}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Currencies: </span>
                      <span className="font-light">
                        {country.currencies[0].name}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Languages: </span>
                      <span className="font-light">
                        {country.languages &&
                          country.languages.map((language) => (
                            <span key={language.name}>{language.name}, </span>
                          ))}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Border Countries: </span>
                  <span className="flex flex-wrap">
                    {country.borders &&
                      country.borders.map((border) => (
                        <span
                          className="bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-50 py-0.5 px-6 rounded-sm shadow mx-1"
                          key={border}
                        >
                          {border}
                        </span>
                      ))}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
