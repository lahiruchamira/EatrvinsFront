import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product.model';
import { productService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  constructor(private productService:productService) { }

  ngOnInit() {
    this.products=this.productService.getProducts();

  }

}
