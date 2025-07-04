import { Emotion, Meal } from "./api.types";
import { emotions } from "./data/emotions";
import { meals } from "./data/meals";

/**
 * Currently returns a mocked out version of the emotions array
 * @returns a promise which resolves with the contents of the emotions.
 */
export function getEmotions() {
  return new Promise<Emotion[]>((resolve) => {
    setTimeout(() => {
      resolve(emotions);
    }, 0);
  });
}

export function getMealForEmotion(emotion: string) {
  return new Promise<Meal | null>((resolve) => {
    setTimeout(() => {
      const filteredMeals = meals.filter((meal) =>
        meal.emotions.includes(emotion)
      );
      if (filteredMeals.length === 0) return null;

      resolve(filteredMeals[Math.floor(Math.random() * filteredMeals.length)]);
    }, 2000);
  });
}
