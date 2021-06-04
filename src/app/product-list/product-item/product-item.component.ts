import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() index:number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
