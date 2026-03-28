import React, {useEffect, useState} from 'react'
import styles from '../styles/AddRecipeStyles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';const AddRecipeScreen = () =>{    
    const [recipeName, setRecipeName] = useState('');
    const [category, setCategory] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [ingredients, setIngredients] =useState('');
    const [errors, setErrors] = useState({})

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(()=>{
        if(recipeName && category && preparationTime && difficulty && ingredients){
            setIsFormValid(true);
        }else{
            setIsFormValid(false)
        }
    },[recipeName, category,preparationTime,difficulty,ingredients])

    const handleSave = () =>{
        if(!validateInputs()) return;

        const ingredientsList = ingredients.split(',').map(i => i.trim());
        Alert.alert(
            'Resumen de la receta',
            `Nombre: ${recipeName}\nCategoria: ${category}\nTiempo: ${preparationTime}\nDificultad: ${difficulty}\nIngredientes:\n• ${ingredientsList.join('\n• ')}`
        )
    }
    const handleClear = () =>{
        setRecipeName('')
        setCategory('')
        setPreparationTime('')
        setDifficulty('')
        setIngredients('')
        setErrors({});
    }
    const validateInputs = () =>{
        const e = {}
        if(!recipeName.trim()) e.recipeName ='El nombre de la receta es obligatorio'
        else if(recipeName.trim().length < 4) e.recipeName ='Debe tener mas de 4 caracteres'
        if(!category.trim()) e.category ='El nombre de la categoria es obligatorio'
        else if(category.trim().length < 4) e.category ='Debe tener mas de 4 caracteres'
        if(!preparationTime.trim()) e.preparationTime ='La duracion de la receta es obligatoria'
        else if(isNaN(preparationTime)) e.preparationTime = 'Debe ser un numero'
        if(!difficulty.trim()) e.difficulty ='La dificultad de la receta es obligatoria'
        else if(difficulty.trim().length < 4) e.difficulty ='Debe tener mas de 4 caracteres'
        if(!ingredients.trim()) e.ingredients ='Los ingredientes son obligatorios'
        else if(ingredients.trim().length < 4) e.ingredients ='Debe tener mas de 4 caracteres'
        
        setErrors(e)
        return Object.keys(e).length === 0

    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.innerContainer}
                behavior={Platform.OS === 'ios' ? 'padding':'height'}
            >
                <View>
                <Text style ={styles.title}>Nueva Receta</Text>
                <TextInput
                    style={styles.input}
                    value={recipeName}
                    onChangeText={setRecipeName}
                    placeholder='Nombre de la receta'
                />
                {errors.recipeName ? <Text>{errors.recipeName}</Text>: null}
                <TextInput 
                    style={styles.input}
                    value={category}
                    onChangeText={setCategory}
                    placeholder='Categoria'
                />
                {errors.category ? <Text>{errors.category}</Text>: null}                
                <TextInput
                    style={styles.input}
                    value={preparationTime}
                    onChangeText={setPreparationTime}
                    placeholder='Tiempo de preparacion'
                />
                {errors.preparationTime ? <Text>{errors.preparationTime}</Text>: null}                
                <TextInput
                    style={styles.input}
                    value={difficulty}
                    onChangeText={setDifficulty}
                    placeholder='Dificultad'
                />
                {errors.difficulty ? <Text>{errors.difficulty}</Text>: null}                
                <TextInput
                    style={styles.input}
                    value={ingredients}
                    onChangeText={setIngredients}
                    placeholder='ingredientes Ej: tomate, cebolla, ajo'
                />
                {errors.ingredients ? <Text>{errors.ingredients}</Text>: null}                
                <TouchableOpacity 
                    style={[styles.saveButton, !isFormValid && styles.saveButtonDisabled]}
                    onPress={handleSave}
                    disabled={!isFormValid}
                >
                    <Text style={styles.buttonText}>Guardar Receta</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.clearButton}
                    onPress={handleClear}
                >
                    <Text style={styles.buttonText}>Limpiar</Text>
                </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AddRecipeScreen;