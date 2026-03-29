// External dependencies
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';

// Styles
import styles from '../styles/AddRecipeStyles';

// Available options for category and difficulty selectors
const CATEGORY_OPTIONS = ['Postre', 'Entrada', 'Plato Fuerte', 'Bebida'];
const DIFFICULTY_OPTIONS = ['Fácil', 'Media', 'Difícil'];

const AddRecipeScreen = () => {
  // Independent useState for each form field (controlled form)
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState('');

  // useState: controls whether the Save button is enabled or disabled
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect with dependencies: validates the form in real time
  // runs every time any field changes
  useEffect(() => {
    const allFieldsFilled =
      recipeName.trim().length > 0 &&
      category.trim().length > 0 &&
      preparationTime.trim().length > 0 &&
      difficulty.trim().length > 0 &&
      ingredients.trim().length > 0;

    setIsFormValid(allFieldsFilled);
  }, [recipeName, category, preparationTime, difficulty, ingredients]);

  // Shows an Alert with a summary of all entered data
  const handleSaveRecipe = () => {
    Alert.alert(
      '✅ Receta Guardada',
      `📋 Resumen de la receta:\n\n` +
        `🍽️ Nombre: ${recipeName}\n` +
        `📂 Categoría: ${category}\n` +
        `⏱️ Tiempo: ${preparationTime} minutos\n` +
        `📊 Dificultad: ${difficulty}\n` +
        `🧺 Ingredientes: ${ingredients}`,
      [
        {
          text: 'Aceptar',
          style: 'default',
          onPress: handleClearFields,
        },
      ]
    );
  };

  // Resets all form fields to their initial empty value
  const handleClearFields = () => {
    setRecipeName('');
    setCategory('');
    setPreparationTime('');
    setDifficulty('');
    setIngredients('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* KeyboardAvoidingView prevents the keyboard from covering inputs */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.formTitle}>📝 Datos de la Receta</Text>

          {/* Field 1: Recipe name - controlled TextInput */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Nombre de la Receta *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Pasta Carbonara"
              placeholderTextColor="#bbb"
              value={recipeName}
              onChangeText={setRecipeName}
              maxLength={60}
            />
          </View>

          {/* Field 2: Category - chip selector, sets category state */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Categoría *</Text>
            <View style={styles.optionsRow}>
              {CATEGORY_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionChip,
                    category === option && styles.optionChipSelected,
                  ]}
                  onPress={() => setCategory(option)}
                >
                  <Text
                    style={[
                      styles.optionChipText,
                      category === option && styles.optionChipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Field 3: Preparation time - numeric input */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Tiempo de Preparación (minutos) *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: 30"
              placeholderTextColor="#bbb"
              value={preparationTime}
              onChangeText={setPreparationTime}
              keyboardType="numeric"
              maxLength={4}
            />
          </View>

          {/* Field 4: Difficulty - chip selector, sets difficulty state */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Dificultad *</Text>
            <View style={styles.optionsRow}>
              {DIFFICULTY_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.optionChip,
                    difficulty === option && styles.optionChipSelected,
                  ]}
                  onPress={() => setDifficulty(option)}
                >
                  <Text
                    style={[
                      styles.optionChipText,
                      difficulty === option && styles.optionChipTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Field 5: Ingredients - multiline TextInput */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Ingredientes Principales *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Ej: 200g pasta, 3 huevos, 100g queso..."
              placeholderTextColor="#bbb"
              value={ingredients}
              onChangeText={setIngredients}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          {/* Hint shown when form is incomplete */}
          {!isFormValid && (
            <Text style={styles.validationHint}>
              * Completa todos los campos para guardar
            </Text>
          )}

          {/* Action buttons row */}
          <View style={styles.buttonsRow}>
            {/* Clear button: always enabled */}
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearFields}
              activeOpacity={0.8}
            >
              <Text style={styles.clearButtonText}>🗑️ Limpiar</Text>
            </TouchableOpacity>

            {/* Save button: disabled until all fields are filled */}
            <TouchableOpacity
              style={[
                styles.saveButton,
                !isFormValid && styles.saveButtonDisabled,
              ]}
              onPress={handleSaveRecipe}
              disabled={!isFormValid}
              activeOpacity={0.85}
            >
              <Text style={styles.saveButtonText}>💾 Guardar Receta</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddRecipeScreen;