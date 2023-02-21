import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { produit } from './produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = "http://localhost:8081/";

  constructor(private http: HttpClient) { }

  addproduit(id:any,produit: produit){
    return this.http.post<produit>(`${this.url}produitsave`+id, produit)
  }

  getproduit(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'produits')
  }

  getproduitById(id: number): Observable<produit>{
    return this.http.get<produit>(`${this.url}produit/${id}`)
  }

  updateproduit(id?: number ,produit?: any): Observable<any>{
    return this.http.put<any>(`${this.url}updateproduit/${id}`, produit)
  }

  deleteproduit(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}deleteproduit/${id}`)
  }

}
