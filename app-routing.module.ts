import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { ViewcategorieComponent } from './components/viewcategorie/viewcategorie.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitComponent } from './components/viewproduit/viewproduit.component';

const routes: Routes = [
  { path: 'All-categorie', component: ViewcategorieComponent },
  { path: 'add', component: AddcategorieComponent },
  { path: 'update/:id', component: UpdatecategorieComponent },
  { path: 'All-produit', component: ViewproduitComponent },
  { path: 'addproduit', component: AddproduitComponent },
  { path: 'updateproduit/:id', component: UpdateproduitComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
