import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/Product.model';
import { productService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  constructor(private productService:productService,
    private router:Router,
    private route:ActivatedRoute ) { }

  ngOnInit() {
    this.productService.productChanged
    .subscribe(
      (products:Product[])=>{
        this.products=products;
      }
    );
    this.products=this.productService.getProducts();

  }
  onNewProduct(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
