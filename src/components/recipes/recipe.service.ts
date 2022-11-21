import { Injectable, EventEmitter } from '@angular/core';
import { Ingridient } from 'src/types/ingridient.model';
import { ShoppingListService } from '../shoppingList/shoppingList.service';
import { RecipesModel } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<RecipesModel>();

  private recipes: RecipesModel[] = [
    new RecipesModel(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingridient('Meat', 1),
        new Ingridient('French Fries', 20)
      ],
    ),
    new RecipesModel('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingridient('Onion', 3),
        new Ingridient('Potato', 10)
      ],
      )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingridient[]) {
    this.slService.addIngredients(ingredients);
  }

}
