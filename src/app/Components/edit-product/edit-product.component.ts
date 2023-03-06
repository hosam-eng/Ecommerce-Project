import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { Iproduct } from 'src/app/ViewModels/iproduct';
import{ Location} from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public pid=this.activatedRouter.snapshot.params["pid"];
  product: Iproduct;
  categoryList: ICategory[]=[];
  constructor(private categoryService: CategoryService,private productService: ProductService,
    private activatedRouter:ActivatedRoute,private location:Location){
    this.product={id:0,name:'',quantity:0,price:0,CategoryID:0}
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
  this.productService.getProductByID(this.pid)
    .subscribe({
      next: (product) => {
        this.product=product;
      },
      error: (response) => {
        console.log(response);
      }
  });
  }


  editProduct(){
    this.productService.editProduct(this.pid,this.product)
       .subscribe({
        next:()=>
        {
         this.location.back();
        },
        error:(response)=>{
          console.log(response);
        }
        
       });
  }


}
