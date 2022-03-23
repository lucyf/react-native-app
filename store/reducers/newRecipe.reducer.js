import { NEW_RECIPE } from "../actions/newRecipe.action";

//models

import NewRecipeModel from "../../model/newRecipe.model";

const initialState ={
    recipes: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case NEW_RECIPE:
            const newRecipe = new NewRecipeModel(
                Date.now(),
                action.payload.title,
                action.payload.ingredients,
                action.payload.image,
            );
            return {
                ...state,
                recipes: state.recipes.concat(newRecipe),
            };

        default:
            return state;
    }
}