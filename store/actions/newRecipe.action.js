import * as FileSystem from 'expo-file-system';
import { insertRecipeBook } from '../../db';


export const NEW_RECIPE = 'NEW_RECIPE';
export const LOAD_RECIPE = 'LOAD_RECIPE';


export const NewRecipe = (title, ingredients, image) =>{
    return async dispatch =>{
        
        const filename= image.split('/').pop();
        const Path = FileSystem.documentDirectory + filename;

        try{
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })

            const result = await insertRecipeBook(
                title,
                ingredients,
                Path
            )
            
            dispatch({ 
                type: 'NEW_RECIPE',
                payload: { id: result.insertId, title, ingredients, image: Path}
            })

        }catch(err){
            console.log(err);
            throw err;
        }

      
    }
   
}

export const loadRecipes = () => {
    return async dispatch => {
        try {
            const result = await fetchAddresses();
            dispatch({ type: LOAD_RECIPE, recipes: result.rows._array })
        } catch (error) {
            throw error;
        }
    }
}