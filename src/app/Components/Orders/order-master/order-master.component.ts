import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/ViewModels/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements AfterViewInit,OnInit {
   categoryList: ICategory[]=[];
   catID: number=1;
   totalPrice: number=0;
   @ViewChild('selitem') elem!: ElementRef;
   constructor(private categoryService: CategoryService )
   {
    this.categoryList=[];
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
  onclicked(id: number){
     this.catID=id;
  }
   OnTotalPriceChanged(TotalPriceChanged: number){
    this.totalPrice =TotalPriceChanged;
   }
   ngAfterViewInit(): void {
    this.elem.nativeElement.style.color='darkblue';
  }
}
