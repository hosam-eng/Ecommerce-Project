import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Iproduct } from 'src/app/ViewModels/iproduct';
import{ Location} from '@angular/common';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product!: Iproduct;
  public pid=this.activatedRouter.snapshot.params["pid"];

 constructor(private productservice: ProductService, 
          private activatedRouter: ActivatedRoute, 
          private location: Location){
 }
  
 ngOnInit(): void {
     this.productservice.getProductByID(this.pid)
     .subscribe({
      next: (product)=>{
         this.product=product;
      },
      error: (response)=>{
        console.log(response);
      }
     });
  }

 
  goBack()
  {
    this.location.back();
  }
 
}
