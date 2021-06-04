export class Product{
public id:string;
public name:string;
public price:number;
public description:string;
public image:string;
public tags:string[];

constructor(id:string,name:string,price:number,description:string,image:string, tags:string[]){
    this.id=id;
    this.name=name;
    this.price=price;
    this.description=description;
    this.image=image;
    this.tags=tags;
}

 }
