import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/components/header/header.component';
import { RecipeListComponent } from 'src/components/recipeList/recipeList.component';
import { RecipeDetailComponent } from 'src/components/recipeDetail/recipeDetail.component';
import { RecipeItemComponent } from 'src/components/recipeItem/recepieItem.component';
import { ShoppingListComponent } from 'src/components/shoppingList/shoppingList.component';
import { ShoppingEditComponent } from 'src/components/shoppingEdit/shoppingEdit.component';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { DropdownDirective } from 'src/types/dropdown.directive';
import { ShoppingListService } from 'src/components/shoppingList/shoppingList.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
