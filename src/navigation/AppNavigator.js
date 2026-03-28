import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import CookingTipsScreen from '../screens/CookingTipsScreen'
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

// Stack for Recipe
const RecipeStack = () =>(
    <Stack.Navigator>
        <Stack.Screen name='RecipeList' component={RecipeListScreen}/>
        <Stack.Screen name='RecipeDetail' component={RecipeDetailScreen}/>
    </Stack.Navigator>
)

const AppNavigator = () =>(
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) =>({
            tabBarIcon:({color,size}) =>{
                let iconName;
                if (route.name === 'Recetas') iconName ='restaurant-outline';
                else if (route.name === 'Nueva Receta') iconName = 'add-circle-outline';
                else if (route.name === 'Tips') iconName ='bulb-outline';
                return <Icon name={iconName} size={size} color={color}/>
            },
        })}
        >
            <Tab.Screen name='Recetas' component={RecipeStack}/>
            <Tab.Screen name='Nueva Receta' component={AddRecipeScreen}/>
            <Tab.Screen name='Tips' component={CookingTipsScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
)


export default AppNavigator