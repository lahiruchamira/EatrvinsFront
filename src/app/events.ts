import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { message } from "./Models/Product.model";

@Injectable()
export class Events {

    public message: Subject<message> = new Subject();
    constructor(){}
    
}