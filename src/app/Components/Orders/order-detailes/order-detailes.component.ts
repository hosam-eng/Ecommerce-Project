import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Iproduct } from 'src/app/ViewModels/iproduct';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-order-detailes',
  templateUrl: './order-detailes.component.html',
  styleUrls: ['./order-detailes.component.css']
})
export class OrderDetailesComponent implements OnChanges, OnInit, AfterViewInit {
   @Input() SelCatID=0;
   @Output() TotalPriceChanged: EventEmitter<number>;
   ProductList: Iproduct[]=[];
   TotalPrice: number=0;
   
   constructor(private ProductService: ProductService,
              private route: Router){
      this.TotalPriceChanged=new EventEmitter<number>(); 
   }
 
  ngAfterViewInit(): void {
  }

 
  ngOnChanges(): void {
    this.getProductByCatID();
  }

getProductByCatID():void{
 this.ProductService.getProductByCatID(this.SelCatID)
  .subscribe({
      next: (product) => {
        this.ProductList=product; 
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  deleteProduct(prodid:number): void{
    this.ProductService.deleteProduct(prodid)
    .subscribe({
      next:()=>{
        this.getProductByCatID();
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
  ngOnInit(): void {
    
  //   this.ProductService.getAllProduct()
  //   .subscribe({
  //     next: (product) => {
  //       this.ProductList=product;
  //     },
  //     error: (response) => {
  //       console.log(response);
  //     }
  // });

  
  }
  goEdit(prodID: number){
    this.route.navigateByUrl("EditProduct/"+prodID);
  }

  ViewProudctDetails(pid: number){
    this.route.navigateByUrl("/Product/"+pid);
 }
 UpdateTotalCount(PPrice: number,PCount: string){
  this.TotalPrice+=(PPrice * Number(PCount));
  this.TotalPriceChanged.emit(this.TotalPrice);
}
}
