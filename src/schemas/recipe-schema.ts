import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

export const SearchFiltersSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

export const DrinkAPIresponse = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const DrinksAPIresponse = z.object({
  drinks: z.array(DrinkAPIresponse),
});
