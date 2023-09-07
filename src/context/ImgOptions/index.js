import { Galery } from 'context/Galery/Galery';
import React, { createContext, useContext, useState } from 'react';

const ImgOptionsContext = createContext();

export default function ImgOptionsProvider({ children }) {

  const { setGalery, galery } = Galery();
  
  const [photo, setPhoto] = useState(null);

  function isFavorite(id) {
    setGalery(galery.map(img => {
      if(img.id === id) {
        img.favorite = !img.favorite
      }
      return img
    }))
  }

  return (
    <ImgOptionsContext.Provider value={{photo, setPhoto, isFavorite}}>
        {children}
    </ImgOptionsContext.Provider>
  )
}

export function ImgOptions() {
    return useContext(ImgOptionsContext)
}