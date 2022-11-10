import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { RecipesModel } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipeItem',
  templateUrl: './recipeItem.component.html',
  styleUrls: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipesModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
