import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import List from './List/index';

const AddItem = () => {
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
    <View >
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        onChangeText={handleChangeText}
        value={textItem}
        placeholder="Ingresa un artículo"
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={{color:'#fff'}}>Agregar</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.list}>
       <Text style={styles.listHeading}>Lista de Compras</Text>
       <List itemsList={itemsList} setItemsList={setItemsList}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    padding: 5
  },
  button:{
    backgroundColor: '#000',
    fontSize: 20,
    padding: 10,
  },
  listHeading:{
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginTop: 10
  }
});

export default AddItem;