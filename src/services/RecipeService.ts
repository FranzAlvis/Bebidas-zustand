import axios from "axios";
import { CategoriesAPIResponseSchema } from "../schemas/recipe-schema";

export const getCategories = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios.get(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data.drinks;
  }
};
