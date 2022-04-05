import axios from 'axios';
import { BORED_API } from "../../constants/database";

export const SELECT_CHALLENGE_ID = 'SELECT_CHALLENGE_ID';
export const MY_CHALLENGES = 'MY_CHALLENGES'
export const RANDOM_CHALLENGE = 'RANDOM_CHALLENGE';

export const selectChallenge = (key) =>({
    type: SELECT_CHALLENGE_ID,
    challengeId: key

})


export const randomChallenge =  (type) => {
   const activity = type !== undefined ? type  : ''
    return function (dispatch) { 
      console.log(BORED_API + activity)
        axios.get(BORED_API + activity)
          .then((response) => {
              dispatch({
            type: RANDOM_CHALLENGE,
            payload: response.data
          })})
          .catch((err) => {
            console.log(err)
            throw err
          })
      }
}
    
