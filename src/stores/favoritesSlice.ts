import { StateCreator } from "zustand";
import { Recipe } from "../types";
import {
  createNotificationSlice,
  NotificacionSliceType,
} from "./NotificacionSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoritesExists: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & NotificacionSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favorites.some((item) => item.idDrink === recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (item) => item.idDrink !== recipe.idDrink
        ),
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Se elimino de favoritos",
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Se Agrego a favoritos",
        error: false,
      });
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
