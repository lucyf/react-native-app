import recipes from '../../database/recipes.data';
import {RANDOM_RECIPE, ADD_RECIPE} from '../actions/suggestion.action'

const initialState = {
    recipes: recipes,
    addRecipe: null,
    randomRecipe: null

}

const SuggestionReducer = (state = initialState, action)=>{
    
    switch(action.type){
        case ADD_RECIPE:
            return {
                ...state,
                addRecipe: null
            }
        case RANDOM_RECIPE:
            return {
                ...state,
                randomRecipe: state.recipes.find(recipe => recipe.id === action.randomRecipeId)
            }
        default: 
        return state;
    }
    
    
}

export default SuggestionReducer;