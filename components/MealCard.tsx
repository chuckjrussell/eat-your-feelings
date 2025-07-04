import { Meal } from "@/api/api.types";
import { Image, StyleSheet, Text, View } from "react-native";

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <View style={styles.recommendationContainer}>
      <Image
        style={styles.image}
        source={{ uri: meal.photo }}
        resizeMode="contain"
      />
      <Text style={styles.recommendationTitle}>{meal.mealName}</Text>
      <Text style={styles.recommendationText}>{meal.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendationContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  recommendationText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
  },
  image: { height: 200, width: "100%", marginBottom: 32 },
});
