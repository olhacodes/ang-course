import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridient } from 'src/types/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingridientsChanged  = new Subject<Ingridient[]>();
  private ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Pears', 10),
  ];

  getIngridients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingridient) {
    this.ingredients.push(ingredient);
    this.ingridientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingridient[]) {
    this.ingredients.push(...ingredients);
    this.ingridientsChanged.next(this.ingredients.slice())
  }


constructor() { }

}
