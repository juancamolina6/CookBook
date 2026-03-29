// External dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

// Screens
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import CookingTipsScreen from '../screens/CookingTipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigator for the Recipes tab
// Allows navigation from RecipeList -> RecipeDetail
const RecipesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FF6B35' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="RecipeList"
        component={RecipeListScreen}
        options={{ title: '🍽️ CookBook' }}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={{ title: 'Detalle de Receta' }}
      />
    </Stack.Navigator>
  );
};

// Root Tab Navigator - contains all 3 main tabs
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FF6B35',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#eee',
            paddingBottom: 5,
            height: 60,
          },
          headerShown: false,
        }}
      >
        {/* Tab 1: Recipes - uses RecipesStack for internal navigation */}
        <Tab.Screen
          name="Recetas"
          component={RecipesStack}
          options={{
            tabBarIcon: () => <Text style={{ fontSize: 20 }}>🍽️</Text>,
          }}
        />

        {/* Tab 2: Add Recipe - single screen, shows its own header */}
        <Tab.Screen
          name="Nueva Receta"
          component={AddRecipeScreen}
          options={{
            tabBarIcon: () => <Text style={{ fontSize: 20 }}>➕</Text>,
            headerShown: true,
            headerStyle: { backgroundColor: '#FF6B35' },
            headerTintColor: '#fff',
            headerTitle: '➕ Nueva Receta',
          }}
        />

        {/* Tab 3: Tips - single screen, shows its own header */}
        <Tab.Screen
          name="Tips"
          component={CookingTipsScreen}
          options={{
            tabBarIcon: () => <Text style={{ fontSize: 20 }}>💡</Text>,
            headerShown: true,
            headerStyle: { backgroundColor: '#FF6B35' },
            headerTintColor: '#fff',
            headerTitle: '💡 Tips Culinarios',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;