import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { productService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id:number;
  editMode=false;
  ProductForm:FormGroup;
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
    if(this,this.editMode){
      this.productService.updateProduct(this.id,this.ProductForm.value);
    }
    else{
      this.productService.addProduct(this.ProductForm.value);
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
