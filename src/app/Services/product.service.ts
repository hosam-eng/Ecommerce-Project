import { importProvidersFrom, Injectable } from '@angular/core';
import { Iproduct } from '../ViewModels/iproduct';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string="http://localhost:49774/";
  constructor(private http: HttpClient) {
  }

  
getAllProduct():Observable<Iproduct[]>{
 return this.http.get<Iproduct[]>(this.baseUrl+"api/values");
}

getProductByID(prodID: number) : Observable<Iproduct>{
    return this.http.get<Iproduct>(this.baseUrl+"/prodbyid/"+prodID);
 }

getProductByCatID(catID: number) : Observable<Iproduct[]>{
  
  return this.http.get<Iproduct[]>(this.baseUrl+"/prodbycatid/"+catID);
 }

 deleteProduct(prodID: number) : Observable<Iproduct>{
  
  return this.http.delete<Iproduct>(this.baseUrl+"api/values/"+prodID);
 }
 addProduct(product: Iproduct) : Observable<Iproduct>{
  product.id=0;
  return this.http.post<Iproduct>(this.baseUrl+"api/values/",product);
 }
 editProduct(prodID:number, product: Iproduct) : Observable<Iproduct>{
  return this.http.put<Iproduct>(this.baseUrl+"api/values/"+prodID,product);
 }
}