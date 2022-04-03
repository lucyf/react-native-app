import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Fonts from './constants/fonts';
import TabNavigation from './navigation/tabNavigation';
import { Provider } from 'react-redux';
import store from './store';

//db

import {init} from './db';

init()
  .then(()=> console.log('Database initialized'))
  .catch((err)=>{
    console.log('Database fail connect');
    console.log(err.message)
  })


export default function App() {


  // Loading Fonts
  const [loaded] = useFonts(Fonts)
  if (!loaded) return <AppLoading/>

  

  return (
      <Provider store={store}><TabNavigation /></Provider>  
        
  );
}

const styles = StyleSheet.create({
  
});
