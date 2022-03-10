export const ADD_RECIPE = 'ADD_RECIPE';
export const RANDOM_RECIPE = 'RANDOM_RECIPE';

export const addRecipe = (id) =>({
    type: 'ADD_RECIPE',
    recipeId: id

})

export const randomRecipe = (id) =>({
    type: 'RANDOM_RECIPE',
    randomRecipeId: id
})