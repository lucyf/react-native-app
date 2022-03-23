import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


// reducers
import SuggestionReducer from "./reducers/suggestions.reducer";
import newRecipeReducer from "./reducers/newRecipe.reducer";


const RootReducer = combineReducers({
    suggestions: SuggestionReducer,
    recipes: newRecipeReducer,
}) 


export default createStore(RootReducer, applyMiddleware(thunk) );