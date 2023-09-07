import React, { createContext, useContext, useState } from "react";
import data from "./galery.json";

const GaleryContext = createContext();

export default function GaleryProvider({ children }) {

  const [galery, setGalery] = useState(data);
  const [search, setSearch] = useState('');


  function FilterByInput(input) {
    const filtrados = data.filter(item => item.titulo.toLowerCase().includes(input));
    setGalery(filtrados);
  }

  return( 
  <GaleryContext.Provider value={{galery, setGalery, search, setSearch, FilterByInput}}>
    {children}
  </GaleryContext.Provider>);
}


export function Galery(){
  return useContext(GaleryContext);
}