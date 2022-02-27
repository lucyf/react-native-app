import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import AddItem from './components/addItem';
// import Index from './screens';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Fonts from './constants/fonts';
import AppNavigation from './navigation/appNavigation';


export default function App() {
  const [ showComponent, setShowComponent] = useState(false);
  let content;

  // Loading Fonts
  const [loaded] = useFonts(Fonts)
  if (!loaded) return <AppLoading/>

  

  return (
        <AppNavigation/>
  );
}

const styles = StyleSheet.create({
  
});
