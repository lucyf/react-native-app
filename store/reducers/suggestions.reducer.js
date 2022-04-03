import {SELECT_CHALLENGE_ID,  RANDOM_CHALLENGE, MY_CHALLENGES } from '../actions/suggestion.action'

const initialState = {
    challenge: null,

}

const SuggestionReducer = (state = initialState, action)=>{
    
    switch(action.type){

        case RANDOM_CHALLENGE:
            return {
                ...state,
                challenge: action.payload,
            }
        default: 
        return state;
    }
    
    
}

export default SuggestionReducer;