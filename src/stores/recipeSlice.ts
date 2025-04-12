import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipes: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: { drinks: [] },
  drinks: { drinks: [] },
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories: { drinks: categories || [] } });
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters);
    set({ drinks: { drinks: drinks || [] } });
  },
  selectRecipes: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    set({ selectedRecipe: selectedRecipe || ({} as Recipe), modal: true });
  },
  closeModal: () => set({ modal: false, selectedRecipe: {} as Recipe }),
});
