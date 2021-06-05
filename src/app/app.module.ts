import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { productService } from './service/product.service';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductStartComponent } from './product/product-start/product-start.component';
import { DropdownDirective } from './header/dropdown.directive';
import { ProductEditComponent } from './product-list/product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Events } from './events';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductComponent,
    ProductStartComponent,
    DropdownDirective,
    ProductEditComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot({position:['top', 'right'],clickIconToClose:true,timeOut:-8}),
  ],
  providers: [productService,DataService,Events],
  bootstrap: [AppComponent]
})
export class AppModule { }
