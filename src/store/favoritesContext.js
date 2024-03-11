import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState(useContext(FavoritesContext).favorites);

  function addFavorite(meal) {
    setFavorites((oldValue) => [...oldValue, meal]);
  }

  function removeFavorite(meal) {
    setFavorites((oldValue) => oldValue.filter((favorite) => favorite.id !== meal.id));
  }

  const value = { favorites, addFavorite, removeFavorite };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
