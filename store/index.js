import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


// reducers
import SuggestionReducer from "./reducers/suggestions.reducer";
import NewChallenges from "./reducers/newChallenge.reducer";


const RootReducer = combineReducers({
    suggestions: SuggestionReducer,
    myChallenges: NewChallenges,
}) 


export default createStore(RootReducer, applyMiddleware(thunk) );