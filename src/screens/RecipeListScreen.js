// External dependencies
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Local data
import RECIPES_DATA from '../data/recipesData';

// Styles
import styles from '../styles/RecipeListStyles';

const RecipeListScreen = () => {
  const navigation = useNavigation();

  // useState: manages the recipe array as local state
  const [recipes, setRecipes] = useState([]);

  // useState: manages the loading indicator visibility
  const [isLoading, setIsLoading] = useState(true);

  // useEffect with empty array []: runs once on mount
  // simulates fetching data from an API
  useEffect(() => {
    const fetchRecipes = () => {
      setTimeout(() => {
        setRecipes(RECIPES_DATA);
        setIsLoading(false);
      }, 1500);
    };

    fetchRecipes();
  }, []);

  // Navigates to RecipeDetail passing the full recipe object as param
  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  // Renders each recipe card in the FlatList
  const renderRecipeCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: item.color }]}
      onPress={() => handleRecipePress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.cardLeft}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.recipeName}>{item.name}</Text>
        <View style={[styles.categoryBadge, { backgroundColor: item.color }]}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>⏱️ {item.preparationTime} min</Text>
          <Text style={styles.metaText}>📊 {item.difficulty}</Text>
        </View>
      </View>
      <Text style={styles.arrowIcon}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subtitle}>
        {recipes.length > 0 ? `${recipes.length} recetas disponibles` : ''}
      </Text>

      {/* Show loading indicator while useEffect fetches data */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6B35" />
          <Text style={styles.loadingText}>Cargando recetas...</Text>
        </View>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={renderRecipeCard}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default RecipeListScreen;