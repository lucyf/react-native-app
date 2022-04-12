import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/colors'



const ChallengeDetail = () => {
  const challenge = useSelector(state => state.myChallenges.selectedItemId)
 
console.log(challenge[0].image)

  return (
    <View style={styles.layout} >
       <Text style={styles.title}>{challenge[0].title}</Text>
       <Text style={styles.text}>{challenge[0].description}</Text>
       <Image 
        style={styles.image}
        source={{ uri: challenge[0].image }}
        />
        <Link to={{ screen: 'Saved Challenges'}} style={styles.button}>Volver</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  layout:{
    textAlign:'center',
    backgroundColor: '#fff',
    flex: 1,
    padding: 25,
    paddingTop: 100, 
},
title:{
  fontSize: 30,
  textAlign:'center',
  fontFamily: 'poppins-bold'
},
text: {
  textAlign:'center', fontFamily: 'poppins-regular', fontSize: 20
},
image: {
  width: 350,
  height: 250,

},
button: {
  margin: 30,
  fontSize: 20,
  padding: 10,
  textAlign: 'center',
  backgroundColor: Colors.vermilion,
  color: 'white',
  borderRadius: 10,
}
});

export default ChallengeDetail;