import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectedEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Tiramisu', 'Blah blah', 'https://tinyurl.com/y994ajc8'),
    new Recipe('Burger', 'Double Cheese Burger', 'https://tinyurl.com/y9es8joy')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedEmitter.emit(recipe);
  }
}
