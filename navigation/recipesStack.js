import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons";

import Index from '../screens';
import SearchRecipes from '../screens/searchRecipes';
import WeekCalendar from '../screens/week';
import MyRecipesIndex from '../screens/myRecipes';
import RecipeList from '../components/recipes/recipeList';
import RecipeDetail from '../components/recipes/recipeDetail';

const Stack = createNativeStackNavigator();


const RecipesStackNavigation = () => {

  return (

        <Stack.Navigator>
            <Stack.Screen 
            name="Mis Recetas" 
            component={RecipeList} 
            />
            <Stack.Screen 
            name="Detalle Receta" 
            component={RecipeDetail}
            />
        </Stack.Navigator>

  );
}


export default RecipesStackNavigation;