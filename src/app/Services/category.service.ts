import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string="http://localhost:49774/";
  
  constructor(private http: HttpClient) { }

  getAllCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.baseUrl+"api/category");
   }
}
