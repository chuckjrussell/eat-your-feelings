import { Meal } from "./api.types";

export function getAllMealsForEmotion(
  emotion: string,
  allMeals: Meal[]
): Meal[] {
  return allMeals.filter((meal) => meal.emotions.includes(emotion));
}
