import { StyleSheet, View, Text, Button, FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RecipeItem from './recipeItem';
import { loadRecipes } from '../../store/actions/newRecipe.action';




const RecipeList = ({ navigation }) => {
  const dispatch = useDispatch();
  const addedRecipes = useSelector(state =>state.recipes.recipes)

  
  useEffect(() => {
    dispatch(loadRecipes());
}, []);


  const renderItem = (data) => (
    <RecipeItem
        title={data.item.title}
        image={data.item.image}
        ingredients={data.item.ingredients}
        onSelect={() => navigation.navigate('Detalle Receta')}
    />
  )


  return (
    <View >
       <Text>Recetas agregadas</Text>
       <View>
       <FlatList
        data={addedRecipes}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
       </View>
       <Button title='Detalle' onPress={() => navigation.navigate('Detalle Receta')}/>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default RecipeList;