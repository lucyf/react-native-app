import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
// import Colors from '../constants/colors'
import ShuffleSearch from '../components/shuffleSearch';



const Index = ({navigation}) => {

  return (
    <View style={styles.layout}>
            <View style={styles.textLayout}>
                <Text style={styles.title} >¡Welcome!</Text>
                <Text style={styles.text}>Enjoy life challenge will give you a random activity when you run out of ideas. 
                Accept the challenge and save in the album memmories you will cherish in the future.</Text>
            </View>
            <ShuffleSearch />
            <View style={styles.categoriesLayout}>
                <TouchableOpacity style={styles.categoriesLink} onPress={() => navigation.navigate('Categories')}>
                    <Text style={styles.categoriesText}>View categories</Text>
                </TouchableOpacity>
            </View> 
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
    textLayout: {
        textAlign:'center',
        padding: 15,
        alignItems: 'center',
        
    },
    title:{
        fontSize: 25,
        fontFamily: 'poppins-bold'
    },
    text: {
        textAlign:'center', fontFamily: 'poppins-regular', fontSize: 18
    },
    categoriesLayout: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10

    },
});

export default Index;