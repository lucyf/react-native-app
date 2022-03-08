import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, TextComponent } from 'react-native';
import { clearErrors } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import List from './List/index';

const AddItem = (props) => {
  const [textItem, setTextItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handleChangeText = (e) => {
    setTextItem(e)   
  }
  
  const handleAdd = () =>{
    setItemsList([{
      value:textItem,
      id: Math.random().toString()
     },...itemsList]);
    setTextItem('');
  }

  return (
    <View style={styles.layout} >
        <View>
          <Text style={styles.instruction}>
            Elige tus ingredientes y te daremos recetas para que elijas
          </Text>
        </View>
        <View >
          <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            onChangeText={handleChangeText}
            value={textItem}
            placeholder="Ingresa un ingrediente"
            />
            <TouchableOpacity style={styles.buttonAgregar} onPress={handleAdd}>
              <Text style={{color:'#fff'}}>Agregar</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <Text style={styles.listHeading}>Mis Ingredientes</Text>
            <List itemsList={itemsList} setItemsList={setItemsList}/>
            
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout:{
    alignContent: 'center',
    padding: 5,
 },
 instruction:{
  justifyContent: 'center',
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 7,
  fontSize: 15,
  marginBottom: 2
 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    
  },
  text: {
    fontSize: 20,
  },
  input: {
    flexGrow: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    paddingLeft: 20
  },
  buttonAgregar:{
    backgroundColor: '#000',
    fontSize: 20,
    padding: 10,
  },
  listHeading:{
    fontSize: 25,
    paddingLeft: 30,
    marginTop: 5,
    fontFamily: 'poppins-bold'
  },
  buttonContainer:{
    width: 90,
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    // marginLeft: 145,
    position: 'absolute',
    top: 700,
    left: 300
  },
  buttonBack: {
      alignContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      


  }
});

export default AddItem;