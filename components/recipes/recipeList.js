import { StyleSheet, View, Text, Button} from 'react-native';



const RecipeList = ({ navigation }) => {

  return (
    <View >
       <Text>Recetas agregadas -lista</Text>
       <Button title='Detalle' onPress={() => navigation.navigate('Detalle Receta')}/>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default RecipeList;