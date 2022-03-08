import { StyleSheet, View, Text, Button} from 'react-native';
import ShuffleSearch from '../components/shuffleSearch';


const Index = () => {
    

  return (
    <View style={styles.layout}>
            <View style={styles.textLayout}>
                <Text style={styles.title} >¡Bienvenido!</Text>
                <Text style={{textAlign:'center', fontFamily: 'poppins-regular', fontSize: 18}}>Organiza tus comidas semanales de la forma mas sencilla.</Text>
            </View>
            <ShuffleSearch />
    </View>
  );
}

const styles = StyleSheet.create({
    layout:{
        textAlign:'center',
        marginTop: 150,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25
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

});

export default Index;