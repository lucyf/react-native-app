import { createStore, combineReducers } from "redux";


// reducers
import SuggestionReducer from "./reducers/suggestions.reducer";


const RootReducer = combineReducers({
    suggestions: SuggestionReducer,
}) 


export default createStore(RootReducer);