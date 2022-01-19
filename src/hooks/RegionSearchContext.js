import React, { createContext, useState } from "react";

export const RegionSearchContext = createContext();

export const RegionSearchProvider = ({ regionSearch, children }) => {
  const [region, setRegion] = useState("https://restcountries.com/v2/all");
  return (
    <RegionSearchContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionSearchContext.Provider>
  );
};

export default RegionSearchProvider;
