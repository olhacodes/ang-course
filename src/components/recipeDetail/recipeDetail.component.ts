import { Component, Input, OnInit } from '@angular/core';
import { RecipesModel } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipeDetail',
  templateUrl: './recipeDetail.component.html',
  styleUrls: []
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipesModel
  constructor() { }

  ngOnInit() {
  }

}
