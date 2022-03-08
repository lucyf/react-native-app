import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity  } from 'react-native';
// import List from './List/index';
import recipes from '../database/recipes.data'

const ShuffleSearch = (props) => {
const [shuffleList, setShuffleList] = useState(recipes)
const [oneRecipe, setOneRecipe]= useState([])
const [show, setShow]= useState(false)

const handleShuffleSearch = () => {
    let random = shuffleList[Math.floor(Math.random() * shuffleList.length)]
    setOneRecipe(random)
    setShow(true)
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
                    <View >
                        <Text style={styles.suggestionText}>{oneRecipe.name}</Text>
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
    suggestionTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    suggestionText:{
        paddingTop:10,
        fontSize: 20
    }
});

export default ShuffleSearch;