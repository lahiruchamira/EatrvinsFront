import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



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

    handleError(error:any){
        throw(error)
     }
}