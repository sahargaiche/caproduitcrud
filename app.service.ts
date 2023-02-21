import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { categorie } from './categories';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  private url = "http://localhost:8081/";

  constructor(private http: HttpClient) { }

  // Add categorie - Create
  addcategorie(categorie: categorie){
    return this.http.post<categorie>(`${this.url}add`, categorie)
  }

  // Get categorie - Read
  getcategorie(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'categories')
  }

  // Get categorie by Id - Read
  getcategorieById(id: number): Observable<categorie>{
    return this.http.get<categorie>(`${this.url}categorie/${id}`)
  }


  // Update categorie - Update
  updatecategorie(id?: number ,categorie?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, categorie)
  }

  // Delete categorie - Delete
  deletecategorie(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }



}
