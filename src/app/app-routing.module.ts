import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from 'src/components/recipeDetail/recipeDetail.component';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { ShoppingListComponent } from 'src/components/shoppingList/shoppingList.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipesComponent },
    { path: 'new', component: RecipesComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipesComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
