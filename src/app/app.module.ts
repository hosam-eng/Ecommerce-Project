import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/LayoutComponents/header/header.component';
import { FooterComponent } from './Components/LayoutComponents/footer/footer.component';
import { ContentComponent } from './Components/LayoutComponents/content/content.component';
import { FormsModule } from '@angular/forms';
import { OrderMasterComponent } from './Components/Orders/order-master/order-master.component';
import { OrderDetailesComponent } from './Components/Orders/order-detailes/order-detailes.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { AddProductComponent } from './Components/Orders/add-product/add-product.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    OrderMasterComponent,
    OrderDetailesComponent,
    ProductdetailsComponent,
    NotFoundComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
