import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

import { RecipesModel } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
  styleUrls: []
})
export class RecipeListComponent implements OnInit {
  recipes: RecipesModel[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }
}
