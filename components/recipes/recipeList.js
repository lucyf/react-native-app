import { StyleSheet, View, Text, Button} from 'react-native';
import { useSelector } from 'react-redux';



const RecipeList = ({ navigation }) => {
  const addedRecipes = useSelector(state =>state.recipes.recipes)
  console.log(addedRecipes)

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