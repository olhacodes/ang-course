import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesModel } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipeItem',
  templateUrl: './recipeItem.component.html',
  styleUrls: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipesModel;
  @Output() recipeSelected = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit()
  }

}
