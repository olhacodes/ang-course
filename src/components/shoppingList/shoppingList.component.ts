import { Component, OnInit } from '@angular/core';
import { Ingridient } from 'src/types/ingridient.model';

@Component({
  selector: 'app-shoppingList',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Apples2', 3),
    new Ingridient('Apple3', 4)
  ];
  constructor() { }

  ngOnInit() {
  }

}
