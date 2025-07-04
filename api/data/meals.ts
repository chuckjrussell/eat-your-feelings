import { Meal } from "../api.types";

export const meals: Meal[] = [
  // Happy meals
  {
    mealName: "Rainbow Buddha Bowl",
    photo:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
    description:
      "A vibrant mix of colorful vegetables, quinoa, and tahini dressing that matches your bright mood. The variety of textures and flavors will keep your good vibes flowing!",
    emotions: ["happy", "energetic", "confident"],
  },
  {
    mealName: "Avocado Toast with Everything Seasoning",
    photo:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&h=300&fit=crop",
    description:
      "Simple, fresh, and Instagram-worthy - this light and satisfying meal celebrates life's simple pleasures. Perfect for maintaining that sunny disposition!",
    emotions: ["happy", "cozy", "confident"],
  },
  {
    mealName: "Berry Smoothie Bowl",
    photo:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&h=300&fit=crop",
    description:
      "Packed with antioxidants and natural sweetness, this colorful bowl is as joyful to look at as it is to eat. The fresh berries will amplify your positive energy!",
    emotions: ["happy", "energetic", "excited"],
  },

  // Sad meals
  {
    mealName: "Classic Mac and Cheese",
    photo:
      "https://images.unsplash.com/photo-1543339318-c4703e2b9e31?w=500&h=300&fit=crop",
    description:
      "Creamy, cheesy comfort that wraps you in a warm hug from the inside out. This nostalgic favorite reminds you that better days are ahead.",
    emotions: ["sad", "cozy", "tired"],
  },
  {
    mealName: "Chicken Noodle Soup",
    photo:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=300&fit=crop",
    description:
      "The ultimate comfort food that soothes both body and soul. Each warm spoonful feels like a gentle reminder that you're cared for.",
    emotions: ["sad", "cozy", "stressed"],
  },
  {
    mealName: "Chocolate Chip Cookies with Milk",
    photo:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=300&fit=crop",
    description:
      "Sometimes sweetness is the best medicine for a heavy heart. These warm, gooey cookies paired with cold milk offer a moment of pure comfort.",
    emotions: ["sad", "cozy", "stressed"],
  },

  // Energetic meals
  {
    mealName: "Protein Power Smoothie",
    photo:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=300&fit=crop",
    description:
      "Packed with protein, spinach, and banana to fuel your active lifestyle. This powerhouse drink will sustain your high energy all day long!",
    emotions: ["energetic", "confident", "excited"],
  },
  {
    mealName: "Quinoa Power Salad",
    photo:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=300&fit=crop",
    description:
      "Fresh greens, protein-rich quinoa, and vibrant vegetables create the perfect fuel for your active day. Light yet satisfying to keep you moving!",
    emotions: ["energetic", "happy", "confident"],
  },
  {
    mealName: "Açaí Energy Bowl",
    photo:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&h=300&fit=crop",
    description:
      "Antioxidant-rich açaí topped with granola, fresh fruit, and nuts provides sustained energy. This superfood bowl matches your vibrant, go-getter attitude!",
    emotions: ["energetic", "excited", "adventurous"],
  },

  // Tired meals
  {
    mealName: "Grilled Cheese and Tomato Soup",
    photo:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
    description:
      "Minimal effort, maximum comfort - this classic combo requires little energy to make but provides soul-warming satisfaction. Perfect for recharging mode.",
    emotions: ["tired", "sad", "cozy"],
  },
  {
    mealName: "Banana Peanut Butter Toast",
    photo:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&h=300&fit=crop",
    description:
      "Quick, easy, and naturally energizing with healthy fats and natural sugars. This simple combination gives you a gentle boost without overwhelming your tired system.",
    emotions: ["tired", "lazy", "energetic"],
  },

  // Stressed meals
  {
    mealName: "Chamomile Tea with Honey Cookies",
    photo:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=300&fit=crop",
    description:
      "Calming chamomile paired with lightly sweetened cookies creates a peaceful moment in your hectic day. Let the gentle flavors wash your stress away.",
    emotions: ["stressed", "cozy", "sad"],
  },
  {
    mealName: "Mediterranean Bowl",
    photo:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
    description:
      "Fresh vegetables, olives, and hummus provide omega-3s and antioxidants that naturally combat stress. This wholesome meal brings peace to your plate.",
    emotions: ["stressed", "happy", "confident"],
  },
  {
    mealName: "Dark Chocolate and Almonds",
    photo:
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=500&h=300&fit=crop",
    description:
      "Rich dark chocolate releases endorphins while almonds provide stress-fighting magnesium. This mindful snack helps reset your nervous system.",
    emotions: ["stressed", "sad", "cozy"],
  },

  // Excited meals
  {
    mealName: "Sushi Platter",
    photo:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop",
    description:
      "An artful arrangement of fresh sushi that's as exciting to look at as it is to eat. Each piece offers a burst of flavor that matches your enthusiasm!",
    emotions: ["excited", "adventurous", "happy"],
  },
  {
    mealName: "Build-Your-Own Taco Bar",
    photo:
      "https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=500&h=300&fit=crop",
    description:
      "Interactive and fun, with endless combinations to explore! The variety and customization options channel your excitement into delicious creativity.",
    emotions: ["excited", "adventurous", "happy"],
  },
  {
    mealName: "Colorful Fruit Kabobs",
    photo:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    description:
      "Vibrant, playful, and bursting with natural sweetness that mirrors your elevated mood. These rainbow skewers turn healthy eating into a celebration!",
    emotions: ["excited", "happy", "energetic"],
  },

  // Lazy meals
  {
    mealName: "Instant Ramen Upgrade",
    photo:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop",
    description:
      "Minimal effort with maximum flavor - just add an egg, green onions, and sriracha to transform basic ramen. Comfort food that respects your low-energy vibe.",
    emotions: ["lazy", "tired", "cozy"],
  },
  {
    mealName: "Cereal and Milk",
    photo:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
    description:
      "Sometimes the simplest pleasures are the best - no cooking required, just pure nostalgic satisfaction. Perfect for when you want to embrace doing absolutely nothing.",
    emotions: ["lazy", "cozy", "happy"],
  },
  {
    mealName: "Microwave Baked Potato",
    photo:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&h=300&fit=crop",
    description:
      "Zero prep, maximum comfort - just pop it in the microwave and top with whatever you have. This humble spud delivers satisfaction with minimal effort.",
    emotions: ["lazy", "tired", "cozy"],
  },

  // Adventurous meals
  {
    mealName: "Korean BBQ Bowl",
    photo:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=300&fit=crop",
    description:
      "Bold flavors, exciting textures, and the perfect balance of sweet, spicy, and savory. This culinary adventure will satisfy your craving for something new and exciting!",
    emotions: ["adventurous", "excited", "confident"],
  },
  {
    mealName: "Indian Curry with Naan",
    photo:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=300&fit=crop",
    description:
      "A complex blend of spices that takes your taste buds on a journey around the world. Each bite offers new layers of flavor for the curious food explorer.",
    emotions: ["adventurous", "excited", "confident"],
  },
  {
    mealName: "Ethiopian Injera Platter",
    photo:
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&h=300&fit=crop",
    description:
      "Eating with your hands using spongy injera bread creates an interactive, cultural dining experience. Perfect for adventurous souls seeking authentic global flavors.",
    emotions: ["adventurous", "excited", "curious"],
  },

  // Cozy meals
  {
    mealName: "Hot Chocolate with Marshmallows",
    photo:
      "https://images.unsplash.com/photo-1542990253-0b0c1f71cd9f?w=500&h=300&fit=crop",
    description:
      "Rich, warm, and enveloping like a blanket for your soul. The creamy sweetness and fluffy marshmallows create the perfect cozy moment of pure comfort.",
    emotions: ["cozy", "sad", "tired"],
  },
  {
    mealName: "Hearty Beef Stew",
    photo:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    description:
      "Slow-cooked comfort that fills your home with warmth and your belly with satisfaction. This soul-warming stew embodies everything cozy and nurturing.",
    emotions: ["cozy", "tired", "stressed"],
  },
  {
    mealName: "Fresh Baked Bread with Butter",
    photo:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=300&fit=crop",
    description:
      "Nothing says cozy like the aroma of fresh bread and the simple pleasure of warm butter melting into every bite. Pure, uncomplicated comfort.",
    emotions: ["cozy", "happy", "content"],
  },

  // Confident meals
  {
    mealName: "Perfectly Grilled Steak",
    photo:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop",
    description:
      "A masterfully prepared steak that commands respect and matches your bold, confident energy. This protein powerhouse fuels your ambitious spirit.",
    emotions: ["confident", "energetic", "excited"],
  },
  {
    mealName: "Gourmet Charcuterie Board",
    photo:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
    description:
      "An elegant spread of fine cheeses, meats, and accompaniments that showcases your sophisticated taste. Perfect for when you're feeling on top of the world.",
    emotions: ["confident", "happy", "sophisticated"],
  },
  {
    mealName: "Salmon with Quinoa Pilaf",
    photo:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop",
    description:
      "A restaurant-quality meal that demonstrates your commitment to excellence and self-care. This nutritious powerhouse supports your winning mindset.",
    emotions: ["confident", "energetic", "healthy"],
  },
];
