import { Component, OnInit } from '@angular/core';
import { RecipesModel } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: []
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipesModel
  constructor() { }

  ngOnInit() {
  }

}
