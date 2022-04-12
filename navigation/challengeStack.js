import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import AddChallenge from '../components/challenge/addChallenge'
import ChallengeDetail from '../components/challenge/challengeDetail';
import MyChallenges from '../screens/myChallenges';

const Stack = createNativeStackNavigator();


const ChallengeStackNavigation = ({navigation}) => {

  return (

        <Stack.Navigator>
         
            <Stack.Screen 
            name="Saved Challenges" 
            component={MyChallenges} 
            options={{
              title: 'My Challenges',
              headerRight: ()=>(
                <TouchableOpacity onPress={()=> navigation.navigate('New Challenge')}>
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
            name="Challenge Detail" 
            component={ChallengeDetail}
            />
             <Stack.Screen 
            name="New Challenge" 
            component={AddChallenge} 
            options={{
              headerShown: true
            }}
            />
        </Stack.Navigator>

  );
}


export default ChallengeStackNavigation;