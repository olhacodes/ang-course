import { Injectable, EventEmitter } from '@angular/core';
import { RecipesModel } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: RecipesModel[] = [
   new RecipesModel ('A test recipe', 'This is simple test', 'https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800'),
   new RecipesModel ('Another test recipe', 'This is simple test', 'https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800')
  ]

  recipeSelected = new EventEmitter<RecipesModel>()

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
