import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { ViewcategorieComponent } from './components/viewcategorie/viewcategorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {formatDate} from '@angular/common';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitComponent } from './components/viewproduit/viewproduit.component';
import { FilterPipe } from './filter.pipes'
import { FilterProduitPipe } from './filterproduit.pipes'
@NgModule({
  declarations: [
    AppComponent,
    AddcategorieComponent,
    UpdatecategorieComponent,
    ViewcategorieComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    ViewproduitComponent,
    FilterPipe,
    FilterProduitPipe



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
