import {SELECT_CHALLENGE_ID,  RANDOM_CHALLENGE, MY_CHALLENGES } from '../actions/suggestion.action'

const initialState = {
    challenge: null,
    selectedChallengeId: null,

}

const SuggestionReducer = (state = initialState, action)=>{
    
    switch(action.type){

        case RANDOM_CHALLENGE:
            return {
                ...state,
                challenge: action.payload,
            }
        case SELECT_CHALLENGE_ID:
            return {
                ...state,
                selectedChallengeId: action.challengeId,
            }


        default: 
        return state;
    }
    
    
}

export default SuggestionReducer;