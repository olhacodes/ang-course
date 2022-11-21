import { Component, Input, OnInit } from '@angular/core';
import { RecipesModel } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipeItem',
  templateUrl: './recipeItem.component.html',
  styleUrls: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipesModel;
  @Input() index: number;

  ngOnInit() {
  }

}
