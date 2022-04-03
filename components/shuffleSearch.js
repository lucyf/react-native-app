import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import Colors from '../constants/colors'
import { useSelector, useDispatch } from 'react-redux';
import { randomChallenge, addChallenge} from '../store/actions/suggestion.action';

const ShuffleSearch = ({ navigation: navigate }) => {


const [show, setShow]= useState(false)
const dispatch = useDispatch()
const challenge = useSelector(state => state.suggestions.challenge)

const handleShuffleSearch =  () => {
    dispatch(randomChallenge())
    setShow(true)

}

const handleAddRecipe =(key)=>{
    dispatch(addChallenge(key))
 
}



  return (
    <View style={styles.layout} >
          <View >
            <TouchableOpacity style={styles.buttonShuffle} onPress={handleShuffleSearch}>
                <Text style={styles.buttonText}>Let's Begin</Text>
            </TouchableOpacity>
          </View>
          <View >
   
            {show ? ( 
                    <View style={styles.layout}>
                            <Text style={styles.suggestionTitle}>Your Challenge is: </Text>
                        <View style={styles.suggestionLayout}>
                            <Text style={styles.suggestionText}>{ challenge === null ? '' :
                            challenge.activity}</Text>
                            <View style={styles.centerLayout}>
                            <TouchableOpacity style={styles.suggestionButton} onPress={handleAddRecipe}>
                                <Text style={styles.buttonText}>Accept Challenge</Text>
                            </TouchableOpacity>
                            </View > 
                        </View> 
                    </View> 
               ) : null}
           
            
           </View>
    </View>
  );
}

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        alignItems: 'center'
    },
    buttonShuffle:{
        marginTop:10,
        marginBottom: 10,
        backgroundColor: Colors.flame,
        padding: 10,
        width: 150,
        borderRadius: 20,
       
    },
    buttonText: {
        color:'#fff',fontSize: 20, fontWeight: 'bold', textAlign: 'center' 
    },
    suggestionLayout:{
        borderColor: Colors.violetcCrayola, borderWidth: 3, paddingHorizontal: 50, paddingVertical: 30, marginTop: 20, borderRadius: 10,
    },
    centerLayout: {
        justifyContent: 'center',
        display: 'flex',
        paddingTop: 10,
    },
    suggestionTitle:{
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    suggestionText:{
        paddingTop:10,
        fontSize: 20
    },
    suggestionButton: {
        marginRight: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: Colors.violetcCrayola
    },

});

export default ShuffleSearch;