import { getEmotions } from "@/api/api";
import { Emotion } from "@/api/api.types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [emotions, setEmotions] = useState<Emotion[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEmotions()
      .then((emotions) => setEmotions(emotions))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [setLoading, setEmotions]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading Emotions</Text>
      </View>
    );
  }

  if (!emotions) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Couldn't load emotions :/</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Meal Finder</Text>
      <Text style={styles.subtitle}>How are you feeling today?</Text>

      <View style={styles.buttonContainer}>
        {emotions?.map((emotion) => (
          <EmotionButton key={emotion.name} emotion={emotion} />
        ))}
      </View>
    </View>
  );
}

function EmotionButton({ emotion }: { emotion: Emotion }) {
  const handleNavigation = (feeling: string) => {
    router.push({
      pathname: "/meal-recommendation",
      params: { feeling },
    });
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleNavigation(emotion.name)}
    >
      <Text style={styles.emojiText}>{emotion.emoji}</Text>
      <Text style={styles.buttonText}>{emotion.displayName}</Text>
      <View style={styles.emojiText}>
        <Ionicons name="arrow-forward" size={20} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    color: "#666",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 300,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  emojiText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    width: 20,
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    padding: 10,
  },
  linkText: {
    color: "#007AFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
