import { create } from "zustand";
import { createRecipesSlice, RecipesSliceTypes } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceTypes>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
  }))
);
