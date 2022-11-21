import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingridient } from 'src/types/ingridient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shoppingList',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingridient[];
  private ingeridentsSubscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngridients();
    this.ingeridentsSubscription = this.slService.ingridientsChanged.subscribe((ingredients: Ingridient[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void {
    this.ingeridentsSubscription.unsubscribe();
  }

}
