class NewRecipeModel {
    constructor( id, title, ingredients, image ) {
      this.id = id.toString();
      this.title = title;
      this.ingredients = ingredients;
      this.image = image;
    }
  }
  
  export default NewRecipeModel;