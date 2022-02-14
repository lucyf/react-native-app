import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AddItem from './components/addItem';


export default function App() {


  return (
    <View style={styles.container}>
      <AddItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
  },
  input: {
    flexGrow: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button:{
    backgroundColor: '#000',
    fontSize: 20,
    padding: 10,
  },
  list:{
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 10
  },
  listHeading:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});
