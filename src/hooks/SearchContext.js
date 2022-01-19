import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ value, children }) => {
  const [search, setSearch] = useState(value);
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
