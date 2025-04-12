import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoritesExists: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favorites.some((item) => item.idDrink === recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (item) => item.idDrink !== recipe.idDrink
        ),
      }));
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
    }
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoritesExists: (id) => {
    return get().favorites.some((item) => item.idDrink === id);
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      set({ favorites: parsedFavorites });
    }
  },
});
