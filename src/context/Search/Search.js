import React, { createContext,  useEffect,  useState } from "react";
import data from "../Galery/galery.json";
import { Galery } from "context/Galery/Galery";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {

  const { setGalery } = Galery();
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const photos = data.filter(item => {
      const filterByTag = !tag || item.tagId === tag;
      const filterByInput = !search || item.titulo.toLowerCase().includes(search);  
      
      return filterByTag && filterByInput
    });  
    setGalery(photos)
  }, [search, tag])
  
  return( 
  <SearchContext.Provider value={{ search, setSearch, tag, setTag }}>
    {children}
  </SearchContext.Provider>);
}