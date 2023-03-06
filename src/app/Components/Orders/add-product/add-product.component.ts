import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Iproduct } from 'src/app/ViewModels/iproduct';
import {  FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/ViewModels/icategory';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit, OnChanges {
  categoryList: ICategory[]=[];
  product:Iproduct;
  constructor(private fb:FormBuilder,
    private productService:ProductService,
    private router:Router,private categoryService:CategoryService){
      this.product={id:0,name:'',price:0,quantity:0,CategoryID:1};
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (category) => {
        this.categoryList=category;
      },
      error: (response) => {
        console.log(response);
      }
  });
   }
 

  addProduct(){
    this.productService.addProduct(this.product)
    .subscribe({
      next:()=>{
        this.router.navigateByUrl("/Product");
      },
      error:(responce)=>{
        console.log(responce);
      }
    });
  }


}
