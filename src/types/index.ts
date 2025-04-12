import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIresponse,
  DrinksAPIresponse,
  RecipeAPIResponseSchema,
  SearchFiltersSchema,
} from "../schemas/recipe-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFiltersSchema>;
export type Drinks = z.infer<typeof DrinksAPIresponse>;
export type Drink = z.infer<typeof DrinkAPIresponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
