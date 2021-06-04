import { Injectable } from "@angular/core";
import { Product } from "../Models/Product.model";

@Injectable()
export class productService{
    private product:Product[]=[
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

    getProducts(){
    return this.product.slice();
    }

}