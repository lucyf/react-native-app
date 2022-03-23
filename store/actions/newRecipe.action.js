import * as FileSystem from 'expo-file-system';


export const NEW_RECIPE = 'NEW_RECIPE';


export const NewRecipe = (title, ingredients, image) =>{
    return async dispatch =>{
        
        const filename= image.split('/').pop();
        const Path = FileSystem.documentDirectory + filename;

        try{
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })
            
            dispatch({ 
                type: 'NEW_RECIPE',
                payload: { title, ingredients, image: Path}
            })

        }catch(err){
            console.log(err);
            throw err;
        }

      
    }
   
}
