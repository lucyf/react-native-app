import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import List from './List/index';

const AddItem = (props) => {
  const {changeShow} = props
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
        <View >
          <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            onChangeText={handleChangeText}
            value={textItem}
            placeholder="Ingresa un artículo"
            />
            <TouchableOpacity style={styles.buttonAgregar} onPress={handleAdd}>
              <Text style={{color:'#fff'}}>Agregar</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <Text style={styles.listHeading}>Lista de Compras</Text>
            <List itemsList={itemsList} setItemsList={setItemsList}/>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonBack} onPress={changeShow} title="Back"></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout:{
    alignContent: 'center',
 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    padding: 20
  },
  text: {
    fontSize: 20,
  },
  input: {
    flexGrow: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5
  },
  buttonAgregar:{
    backgroundColor: '#000',
    fontSize: 20,
    padding: 10,
  },
  listHeading:{
    fontSize: 25,
    paddingLeft: 30,
    marginTop: 10,
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