import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, NotificacionSliceType } from "./NotificacionSlice";
import { AISlice, createAISlice } from "./aiSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificacionSliceType & AISlice>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
  }))
);
