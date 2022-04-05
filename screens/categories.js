import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';

import Accordion from '../components/accordion';
// import Colors from '../constants/colors'



const Categories = ({navigation}) => {
    const categories = [
      'Relaxation',
      'Recreational',
      'Charity',
      'Education',
      'Social',
      'Busywork'
    ]

  return (
    <View style={styles.layout}>
      
      <FlatList
        data={categories}
        renderItem={(data) => (<Accordion data={data}/>)}
        keyExtractor={(item) => item.key}
        /> 
      
            
    </View>
  );
}

const styles = StyleSheet.create({
    layout:{
        textAlign:'center',
        backgroundColor: '#fff',
        flex: 1,
        padding: 25,
    },
    category: {
      backgroundColor: Colors.mediumBlue,
      padding: 10,
      margin: 10,
      borderRadius: 10

    },
    categoryText: {
      color: '#fff',
      fontSize: 20
    }
});

export default Categories;