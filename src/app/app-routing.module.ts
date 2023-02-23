import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AddProductComponent } from './Components/Orders/add-product/add-product.component';
import { OrderDetailesComponent } from './Components/Orders/order-detailes/order-detailes.component';
import { OrderMasterComponent } from './Components/Orders/order-master/order-master.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';

const routes: Routes = [
  {path:'AddProduct',component:AddProductComponent},
  {path:'EditProduct/:pid',component: EditProductComponent},
  {path:'Product',component:OrderMasterComponent},
  {path:'Product/:pid',component:ProductdetailsComponent},
  {path:'',redirectTo:'/Product',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
