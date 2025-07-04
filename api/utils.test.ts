import { getAllMealsForEmotion } from "./utils";

describe("Emotions Data", () => {
  test("should return an empty array given an empty string or no meals.", () => {
    const result = getAllMealsForEmotion("", []);
    expect(result).toHaveLength(0);
  });

  test("should have the right number of meals", () => {
    const meals = [
      {
        mealName: "Grilled Salmon with Quinoa",
        photo: "https://example.com/salmon-quinoa.jpg",
        description:
          "Fresh Atlantic salmon grilled to perfection, served with fluffy quinoa and roasted vegetables. A healthy and satisfying meal packed with omega-3 fatty acids.",
        emotions: ["satisfied", "healthy", "energized"],
      },
      {
        mealName: "Homemade Chocolate Chip Cookies",
        photo: "https://example.com/chocolate-cookies.jpg",
        description:
          "Warm, gooey chocolate chip cookies made from scratch with real vanilla and premium chocolate chips. Perfect for sharing with loved ones.",
        emotions: ["nostalgic", "comforted", "happy", "indulgent"],
      },
      {
        mealName: "Spicy Thai Green Curry",
        photo: "https://example.com/green-curry.jpg",
        description:
          "Aromatic Thai green curry with coconut milk, fresh basil, and your choice of protein. Served with jasmine rice for an authentic experience.",
        emotions: ["adventurous", "excited", "warm", "happy"],
      },
    ];

    const result = getAllMealsForEmotion("satisfied", meals);
    expect(result).toHaveLength(1);
    expect(result[0].mealName).toEqual("Grilled Salmon with Quinoa");
  });
});
