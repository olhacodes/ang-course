import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipesModel } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
  styleUrls: []
})
export class RecipeListComponent implements OnInit {
  recipes: RecipesModel[] = [
    new RecipesModel('A test recipe', 'This is simple test', 'https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800')
  ];
  @Output() recipeWasSelected = new EventEmitter<RecipesModel>()

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipesModel) {
    this.recipeWasSelected.emit(recipe)
  }

}
