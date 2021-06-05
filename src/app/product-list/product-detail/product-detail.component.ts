import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product.model';
import { productService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  index:number;
  constructor(private productService:productService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.index=+params['id'];
        this.product=this.productService.getProduct(this.index);
      }
    )
  }
  onEditProduct(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteProduct(){
    this.productService.deleteProduct(this.product);
    this.router.navigate(['./'],{relativeTo:this.route});
  }

}
