import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/Models/Product.model';
import { productService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id:number;
  guid: string;
  editMode=false;
  ProductForm:FormGroup;
  tagsS:string[]=[];
  constructor(private route:ActivatedRoute,
    private productService:productService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
          this.id=+params['id'];
          this.editMode=params['id'] !=null;
          this.initForm();
      }
    )
  }
  get controls() { // a getter!
    return (<FormArray>this.ProductForm.get('tags')).controls;
  }
  onAddtag(){
    (<FormArray>this.ProductForm.get('tags')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required)
      })
    );
  }
  onSubmit(){
    const tags=this.ProductForm.value.tags;
      for(let tag of tags)
      {
        this.tagsS.push(tag.name);
      }
    const newProduct=new Product(
      '',
      this.ProductForm.value['name'],
      this.ProductForm.value['price'],
      this.ProductForm.value['description'],
      this.ProductForm.value['image'],
      this.tagsS
    )
    if(this.editMode){
      newProduct._id=this.guid;
      this.productService.updateProduct(this.id,newProduct);
    }
    else{
      this.productService.addProduct(newProduct);
    }
  console.log(this.ProductForm);
  }
  private initForm(){
    let productName='';
    let productImage='';
    let productPrice;
    let productDiscription='';
    let productTags=new FormArray([]);
    if(this.editMode)
    {
      const product=this.productService.getProduct(this.id);
      productName=product.name;
      productImage=product.image;
      productPrice=product.price;
      productDiscription=product.description;
      this.guid=product._id;
      if(product.tags){
        for(let tag of product.tags){
          productTags.push(
            new FormGroup({
              'name':new FormControl(tag,Validators.required)
            })
          )
        }

      }
    }

    this.ProductForm=new FormGroup({
      'name': new FormControl(productName,Validators.required),
      'image':new FormControl(productImage,Validators.required),
      'price':new FormControl(productPrice,Validators.required),
      'description':new FormControl(productDiscription,Validators.required),
      'tags': productTags
    });
  }

}
