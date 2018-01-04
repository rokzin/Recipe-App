import { Ingredient } from '../ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();


  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 3)
  ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
      // the approach above will emit a lot of events. this approach wont.
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
