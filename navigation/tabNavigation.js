import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import Index from '../screens';
import Categories from '../screens/categories';

import ChallengeStackNavigation from './challengeStack';
import Colors from '../constants/colors'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  return (
<NavigationContainer>
        <Tab.Navigator >
            <Tab.Screen 
            name="Home" 
            component={Index} 
            options={{
              title: "Enjoy Challenge",
              headerShown: false,
              tabBarIcon: ({ size }) => (
                <Ionicons name="ios-home" size={size} color={Colors.flame} />
              ),
            }}
            />
            <Tab.Screen 
            name="Categories" 
            component={Categories}
            options={{
              title: "Categories",
              tabBarIcon: () => (
                <Ionicons name="copy-outline" size={25} color={Colors.flame} />
              )
            }}>
              
              </Tab.Screen>
             <Tab.Screen 
            name="My Challenges" 
            component={ChallengeStackNavigation}
            options={{
              title: "My Chanllenges",
              headerShown: false,
              tabBarIcon: ({ color = Colors.vermilion, size }) => (
                <Ionicons name="book" size={size} color={Colors.flame} 
                />
              )
            }}
             />

        </Tab.Navigator>
</NavigationContainer>

  );
}


export default TabNavigation;