import * as FileSystem from 'expo-file-system';
import { insertChanllengeAlbum , fetchChanllengeAlbum } from '../../db';


export const NEW_CHALLENGE = 'NEW_CHALLENGE';
export const LOAD_CHALLENGE = 'LOAD_CHALLENGE';
export const SELECT_ITEM_ID = 'SELECT_ITEM_ID';


export const NewChallenge = (title, description, image) =>{
    return async dispatch =>{
        
        const filename= image.split('/').pop();
        const Path = FileSystem.documentDirectory + filename;

        try{
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })

            const result = await insertChanllengeAlbum(
                title,
                description,
                Path
            )
            
            dispatch({ 
                type: 'NEW_CHALLENGE',
                payload: { id: result.insertId, title, description, image: Path}
            })

        }catch(err){
            console.log(err);
            throw err;
        }

      
    }
   
}

export const loadChallenge = () => {
    return async dispatch => {
        try {
            const result = await fetchChanllengeAlbum();
            dispatch({ type: LOAD_CHALLENGE, myChallenges: result.rows._array })
        } catch (error) {
            throw error;
        }
    }
}


export const selectItemId = (challlengeId) =>({
    type: SELECT_ITEM_ID ,
    challlengeId,
  })