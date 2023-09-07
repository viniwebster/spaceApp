import React, { createContext,  useState } from "react";
import data from "../Galery/galery.json";
import { Galery } from "context/Galery/Galery";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {

  const { setGalery } = Galery();
  const [search, setSearch] = useState('');

  function FilterByInput(input) {
    setGalery(data.filter(item => item.titulo.toLowerCase().includes(input)));
  }

  function FilterByTags(id) {
    setGalery(data.filter(item => item.tagId === id));
    if (id === 5) {
        setGalery(data);
    }
  }

  return( 
  <SearchContext.Provider value={{ search, setSearch, FilterByInput, FilterByTags }}>
    {children}
  </SearchContext.Provider>);
}