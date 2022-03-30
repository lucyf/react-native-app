import { LOAD_RECIPE, NEW_RECIPE } from "../actions/newRecipe.action";

//models

import NewRecipeModel from "../../model/newRecipe.model";

const initialState ={
    recipes: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case NEW_RECIPE:
            const newRecipe = new NewRecipeModel(
                action.payload.id.toString(),
                action.payload.title,
                action.payload.ingredients,
                action.payload.image,
            );
            return {
                ...state,
                recipes: state.recipes.concat(newRecipe),
            };

            case LOAD_RECIPE:
                return {
                    ...state,
                    recipes: action.recipes.map(item => new Place(
                        item.id,
                        item.title,
                        item.ingredients,
                        item.image
                    ))
                }

        default:
            return state;
    }
}