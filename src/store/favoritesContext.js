import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState(useContext(FavoritesContext).favorites);

  function addFavorite(id) {
    setFavorites((oldValue) => [...oldValue, id]);
  }

  function removeFavorite(id) {
    setFavorites((oldValue) => oldValue.filter((favorite) => favorite !== id));
  }

  const value = { favorites, addFavorite, removeFavorite };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
