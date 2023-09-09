import React, { createContext, useContext, useState } from "react";
import data from "./galery.json";

const GaleryContext = createContext();

export default function GaleryProvider({ children }) {

  const [galery, setGalery] = useState(data);

  return( 
  <GaleryContext.Provider value={{galery, setGalery}}>
    {children}
  </GaleryContext.Provider>);
}


export function Galery(){
  return useContext(GaleryContext);
}