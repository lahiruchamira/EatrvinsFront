import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { productService } from './service/product.service';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductStartComponent } from './product/product-start/product-start.component';
import { DropdownDirective } from './header/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductComponent,
    ProductStartComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
