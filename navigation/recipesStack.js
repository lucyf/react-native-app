import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import AddRecipe from '../components/recipes/addRecipe';
import RecipeList from '../components/recipes/recipeList';
import RecipeDetail from '../components/recipes/recipeDetail';

const Stack = createNativeStackNavigator();


const RecipesStackNavigation = ({navigation}) => {

  return (

        <Stack.Navigator>
         
            <Stack.Screen 
            name="Mis Recetas" 
            component={RecipeList} 
            options={{
              title: 'Mis Recetas',
              headerRight: ()=>(
                <TouchableOpacity onPress={()=> navigation.navigate('Nueva Receta')}>
                  <Ionicons
                   name='md-add'
                   color={Platform.OS === 'andoid' ? '#000' : '#000'}
                   size={23}
                  />

                </TouchableOpacity>
              )
            }}
            />
            <Stack.Screen 
            name="Detalle Receta" 
            component={RecipeDetail}
            />
             <Stack.Screen 
            name="Nueva Receta" 
            component={AddRecipe} 
            />
        </Stack.Navigator>

  );
}


export default RecipesStackNavigation;