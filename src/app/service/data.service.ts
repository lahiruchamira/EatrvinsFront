import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from "../Models/Product.model";
import { promise } from "selenium-webdriver";



@Injectable()
export class DataService {
    constructor(private http: HttpClient){
    }

    async GetProducts():Promise<any>{
        return this.http.get<any>('http://localhost:3000/products')
        .toPromise()
        .then()
        .catch(this.handleError)
    }
    async AddProduct(product:Product):Promise<any>{
        return this.http.post<any>('http://localhost:3000/products',product)
        .toPromise()
        .then()
        .catch(this.handleError)
    }
    async UpdateProduct(product:Product):Promise<any>{
        return this.http.put<any>('http://localhost:3000/products/'+product._id,product)
        .toPromise()
        .then()
        .catch(this.handleError)
    }
    async deleteProduct(product:Product):Promise<any>{
        return this.http.delete<any>('http://localhost:3000/products/'+product._id)
        .toPromise()
        .then()
        .catch(this.handleError)
    }

    handleError(error:any){
        throw(error)
     }
}