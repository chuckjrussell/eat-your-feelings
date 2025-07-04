import { getMealForEmotion } from "@/api/api";
import { Meal } from "@/api/api.types";
import { MealCard } from "@/components/MealCard";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";

export default function MealRecommendation() {
  const { feeling } = useLocalSearchParams<{ feeling: string }>();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState<Meal | null>();

  useEffect(() => {
    setLoading(true);
    getMealForEmotion(feeling)
      .then((meal) => setMeal(meal))
      .finally(() => {
        setLoading(false);
      });
  }, [feeling]);

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/");
    }
  };

  if (loading) {
    return (
      <Animated.View
        style={styles.container}
        entering={FadeInDown}
        exiting={FadeOutUp}
      >
        <Text style={styles.title}>Loading...</Text>
      </Animated.View>
    );
  }

  if (!meal) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Could not find a meal for "{feeling}"
          </Text>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Text style={styles.backButtonText}>← Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown}
      exiting={FadeOutUp}
    >
      <View>
        <Text style={styles.title}>Meal Recommendation</Text>
        <Text style={styles.feelingText}>
          You're feeling: <Text style={styles.feelingValue}>{feeling}</Text>
        </Text>
        <MealCard meal={meal} />
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>← Go Back</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  feelingText: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  feelingValue: {
    fontWeight: "bold",
    color: "#007AFF",
    textTransform: "capitalize",
  },
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
  backButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
