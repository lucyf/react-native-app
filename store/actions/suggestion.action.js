import axios from 'axios';
import { BORED_API } from "../../constants/database";

export const SELECT_CHALLENGE_ID = 'SELECT_CHALLENGE_ID';
export const MY_CHALLENGES = 'MY_CHALLENGES'
export const RANDOM_CHALLENGE = 'RANDOM_CHALLENGE';


export const selectChallenge = (key) => {
  return function (dispatch) { 
      axios.get(BORED_API + '?key=' + key)
        .then((response) => {
            dispatch({
              type: SELECT_CHALLENGE_ID,
              payload: {
                id: response.data.key,
                activity: response.data.activity,
                participants: response.data.participants,
                category: response.data.type,
              }
        })})
        .catch((err) => {
          console.log(err)
          throw err
        })
    }

}


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

