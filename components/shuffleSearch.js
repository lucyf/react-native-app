import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
// import List from './List/index';
import recipes from '../database/recipes.data'

const ShuffleSearch = (props) => {

const [oneRecipe, setOneRecipe]= useState([])
const [show, setShow]= useState(false)
const [addRecipe, setAddRecipe]= useState([])

const handleShuffleSearch = () => {
    let random = recipes[Math.floor(Math.random() * recipes.length)]
    setOneRecipe(random)
    setShow(true)
}

const handleAddRecipe =()=>{
    let isInRecipesBook = addRecipe.findIndex(item => item.id === oneRecipe.id)
    if(isInRecipesBook === -1){
        setAddRecipe([...addRecipe, oneRecipe])
    }
  
}
console.log(addRecipe)
const handleViewDetail =()=>{
    
}

  return (
    <View >
        <View>
          <Text style={styles.instruction}>
            Apreta el botón y te sugeriremos recetas únicas.
          </Text>
        </View>
         <View >
          <View >
            <TouchableOpacity style={styles.buttonShuffle} onPress={handleShuffleSearch}>
                <Text style={{color:'#fff',fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Shuffle</Text>
            </TouchableOpacity>
          </View>
          <View >
            <Text style={styles.suggestionTitle}>Sugerencias</Text>
            {show ? ( 
                    <View style={styles.suggestionRow}>
                        <Text style={styles.suggestionText}>{oneRecipe.name}</Text>
                        <Button style={styles.suggestionButton} onPress={handleAddRecipe}
                        title="Agregar"/>
                        <Button style={styles.suggestionButton} onPress={handleViewDetail}
                        title="Ver"/>
                    </View> 
               ) : null}
           
            
           </View>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    buttonShuffle:{
        marginTop:10,
        marginBottom: 10,
        backgroundColor: 'blue',
        padding: 10,
        width: 100,
       
    },
    suggestionRow:{
        flexDirection: 'row'
    },
    suggestionTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    suggestionText:{
        paddingTop:10,
        fontSize: 20
    },
    suggestionButton: {
        marginRight: 5
    }
});

export default ShuffleSearch;