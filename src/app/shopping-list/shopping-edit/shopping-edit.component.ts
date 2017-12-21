import { Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter } from '@angular/core';
import { Ingredient } from '../../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() ingredientEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient() {
    const ingredientName = this.name.nativeElement.value;
    const ingredientAmount = this.amount.nativeElement.value;
    const tempIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientEmitter.emit(tempIngredient);
  }
}
