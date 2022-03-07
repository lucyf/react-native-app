import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Fonts from './constants/fonts';
import TabNavigation from './navigation/tabNavigation';


export default function App() {


  // Loading Fonts
  const [loaded] = useFonts(Fonts)
  if (!loaded) return <AppLoading/>

  

  return (
        <TabNavigation/>
        
  );
}

const styles = StyleSheet.create({
  
});
