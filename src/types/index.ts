import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIresponse,
  DrinksAPIresponse,
  SearchFiltersSchema,
} from "../schemas/recipe-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFiltersSchema>;
export type Drinks = z.infer<typeof DrinksAPIresponse>;
export type Drink = z.infer<typeof DrinkAPIresponse>;
