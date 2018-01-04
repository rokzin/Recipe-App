import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Tiramisu',
    'Blah blah',
    'https://tinyurl.com/y994ajc8',
    [
      new Ingredient('Cinnamon', 3),
      new Ingredient('Cake batter', 1)
    ]),
    new Recipe('Burger',
    'Double Cheese Burger',
    'https://tinyurl.com/y9es8joy',
    [
      new Ingredient('Beef', 2),
      new Ingredient('bun', 1),
      new Ingredient('American Cheese', 2),
      new Ingredient('Ketchup', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }
}
