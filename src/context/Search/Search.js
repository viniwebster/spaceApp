import React, { createContext,  useState } from "react";
import data from "../Galery/galery.json";
import { Galery } from "context/Galery/Galery";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {

  const { setGalery } = Galery();
  const [search, setSearch] = useState('');

  function FilterByInput(input) {
    setGalery(data.filter(item => item.name.toLowerCase().includes(input)));
  }

  function FilterByTags(tag) {
    setGalery(data.filter(item => item.type === tag));
    if (tag === "todas") {
        setGalery(data);
    }
  }

  return( 
  <SearchContext.Provider value={{ search, setSearch, FilterByInput, FilterByTags }}>
    {children}
  </SearchContext.Provider>);
}