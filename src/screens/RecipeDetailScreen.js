// External dependencies
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// Styles
import styles from '../styles/RecipeDetailStyles';

const RecipeDetailScreen = ({ route, navigation }) => {
  // route.params: receives and destructures the full recipe object
  const { recipe } = route.params;
  const {
    name,
    category,
    emoji,
    preparationTime,
    difficulty,
    color,
    ingredients,
    steps,
  } = recipe;

  // useState: toggles the favorite status of the recipe
  const [isFavorite, setIsFavorite] = useState(false);

  // useState: controls the portion counter
  const [portions, setPortions] = useState(2);

  // useState: stores the user star rating (0 = no rating)
  const [userRating, setUserRating] = useState(0);

  // useEffect with dependency: runs every time the recipe param changes
  // dynamically updates the header title and color with the recipe name
  useEffect(() => {
    navigation.setOptions({
      title: `${emoji} ${name}`,
      headerStyle: { backgroundColor: color },
    });
  }, [recipe]);

  const handleIncrementPortions = () => setPortions((prev) => prev + 1);

  const handleDecrementPortions = () => {
    if (portions > 1) setPortions((prev) => prev - 1);
  };

  const handleToggleFavorite = () => setIsFavorite((prev) => !prev);

  const handleGoBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Hero section: emoji, name, category, time, difficulty */}
        <View style={[styles.heroCard, { backgroundColor: color }]}>
          <Text style={styles.heroEmoji}>{emoji}</Text>
          <Text style={styles.heroName}>{name}</Text>
          <View style={styles.heroMeta}>
            <View style={styles.metaBadge}>
              <Text style={styles.metaBadgeText}>📂 {category}</Text>
            </View>
            <View style={styles.metaBadge}>
              <Text style={styles.metaBadgeText}>⏱️ {preparationTime} min</Text>
            </View>
            <View style={styles.metaBadge}>
              <Text style={styles.metaBadgeText}>📊 {difficulty}</Text>
            </View>
          </View>
        </View>

        {/* Actions: favorite toggle + star rating */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={handleToggleFavorite}
            activeOpacity={0.8}
          >
            <Text style={styles.favoriteIcon}>
              {isFavorite ? '❤️' : '🤍'}
            </Text>
            <Text style={styles.favoriteLabel}>
              {isFavorite ? 'Guardada' : 'Favorita'}
            </Text>
          </TouchableOpacity>

          {/* Star rating: maps 1-5 and compares with userRating state */}
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingLabel}>Tu calificación:</Text>
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => setUserRating(star)}
                >
                  <Text style={styles.starIcon}>
                    {star <= userRating ? '⭐' : '☆'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Portion counter: increment and decrement buttons */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🍽️ Porciones</Text>
          <View style={styles.portionRow}>
            <TouchableOpacity
              style={[styles.portionButton, { borderColor: color }]}
              onPress={handleDecrementPortions}
            >
              <Text style={[styles.portionButtonText, { color }]}>−</Text>
            </TouchableOpacity>
            <Text style={styles.portionCount}>{portions}</Text>
            <TouchableOpacity
              style={[styles.portionButton, { borderColor: color }]}
              onPress={handleIncrementPortions}
            >
              <Text style={[styles.portionButtonText, { color }]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Ingredients list: maps the ingredients array */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🧺 Ingredientes</Text>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientRow}>
              <View style={[styles.bullet, { backgroundColor: color }]} />
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        {/* Steps list: maps the steps array with numbered circles */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👨‍🍳 Preparación</Text>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <View style={[styles.stepNumber, { backgroundColor: color }]}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        {/* Go back button */}
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: color }]}
          onPress={handleGoBack}
          activeOpacity={0.85}
        >
          <Text style={styles.backButtonText}>← Volver al catálogo</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetailScreen;