import {SELECT_CHALLENGE_ID,  RANDOM_CHALLENGE, MY_CHALLENGES } from '../actions/suggestion.action'

const initialState = {
    challenge: null,
    selectedChallenge: {
        id: null,
        activity: null,
        participants: null,
        category: null,
    },

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
                selectedChallenge: action.payload,
            }


        default: 
        return state;
    }
    
    
}

export default SuggestionReducer;