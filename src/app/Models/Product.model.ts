import { messagetype } from "src/enum";

export class Product{
public _id:string;
public name:string;
public price:number;
public description:string;
public image:string;
public tags:string[];

constructor(id:string,name:string,price:number,description:string,image:string, tags:string[]){
    this._id=id;
    this.name=name;
    this.price=price;
    this.description=description;
    this.image=image;
    this.tags=tags;
}

}
export interface message{
    title:string,
    meg:string;
    type:messagetype
  }
