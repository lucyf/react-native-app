import { LOAD_CHALLENGE, NEW_CHALLENGE, SELECT_ITEM_ID} from "../actions/newChallenge.action";

//models

import NewChallengeModel from "../../model/newChallenge.model";

const initialState ={
    myChallenges: [],
    selectedItemId: null,

}

export default (state = initialState, action) => {
    switch(action.type) {
        case NEW_CHALLENGE:
            const newChallenge = new NewChallengeModel(
                action.payload.id.toString(),
                action.payload.title,
                action.payload.description,
                action.payload.image,
            );
            return {
                ...state,
                myChallenges: state.myChallenges.concat(newChallenge),
            };

            case LOAD_CHALLENGE:
                return {
                    ...state,
                    myChallenges: action.myChallenges.map(item => new NewChallengeModel(
                        item.id,
                        item.title,
                        item.description,
                        item.image
                    ))
                }
            case SELECT_ITEM_ID : 
                return {
                    ...state,
                    selectedItemId: state.myChallenges.filter(item => item.id === action.challlengeId)
                }
        

        default:
            return state;
    }
}