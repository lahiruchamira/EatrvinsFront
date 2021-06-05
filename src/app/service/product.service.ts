import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "../Models/Product.model";
import { ProductEditComponent } from "../product-list/product-edit/product-edit.component";
import { DataService } from "./data.service";

@Injectable()
export class productService{
    productChanged=new Subject<Product[]>();
    private products:Product[]=[
        new Product('60ba1fe7f7517286b4883a7a',
        'Product1',
        5674.00,
        'this is Simple Product',
        'https://bellroy-product-images.imgix.net/bellroy_dot_com_gallery_image/SGD/BCBB-NEC-208/0?w=730&h=487&fit=clip&dpr=1&q=75&auto=format',
        ['bag']),
        new Product('60ba1fe7f7517286b4883a7a',
        'Product 2',
        2345.00,
        'this is Simple Product',
        'https://cdn.shopify.com/s/files/1/0757/9123/products/linjer-minimalist-watch-38-gunmetal-tan-1-front_540x.jpg?v=1573730028',
        ['watch'])
    ]
    constructor(private service:DataService){

    }

    async getProducts(){
    //return this.products.slice();
     await this.service
      .GetProducts()
      .then((data) => {
        this.products = data;
      })
      .catch((error) => {
        
      });
      return this.products; 
    }
    getProduct(index:number){
        return this.products[index];
    }
    async addProduct(product:Product){
        //this.products.push(product);
        await this.service
        .AddProduct(product)
        .then((data) => {
          
        })
        .catch((error) => {
          
        });
         this.productChanged.next(await this.getProducts())
    }
    async updateProduct(index:number, product:Product){
        //this.products[index]=product;
        await this.service
        .UpdateProduct(product)
        .then((data) => {
          
        })
        .catch((error) => {
          
        });
        this.productChanged.next(await this.getProducts())
    }
    async deleteProduct(product:Product){
        await this.service
        .deleteProduct(product)
        .then((data) => {
          
        })
        .catch((error) => {
          
        });
        this.productChanged.next(await this.getProducts())
    }

}