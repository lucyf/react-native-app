import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import Index from '../screens';
import SearchRecipes from '../screens/searchRecipes';
import WeekCalendar from '../screens/week';
import RecipesStackNavigation from './recipesStack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  return (
<NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={Index} 
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" size={size} color={color} />
              )
            }}
            />
            <Tab.Screen 
            name="Recipes" 
            component={SearchRecipes}
            options={{
              title: "Buscar",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-search" size={size} color={color} />
              )
            }}>
              
              </Tab.Screen>
             <Tab.Screen 
            name="Recetas" 
            component={RecipesStackNavigation}
            options={{
              title: "Mis Recetas",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" size={size} color={color} 
                />
              )
            }}
             />
            <Tab.Screen 
            name="Calendar" 
            component={WeekCalendar}
            options={{
              title: "Calendario",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-calendar" size={size} color={color} />
              )
            }}
             />
        </Tab.Navigator>
</NavigationContainer>

  );
}


export default TabNavigation;