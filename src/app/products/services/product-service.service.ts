import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Array<ProductModel> = [
    {
      name: 'potato',
      price: 1,
      description: 'tasty',
      quantity: 2,
      id: '1t'
    },
    {
      name: 'potato lux',
      price: 2,
      description: 'very tasty',
      quantity: 3,
      id: '1c'
    },
    {
      name: 'carrot',
      price: 1,
      description: 'orange',
      quantity: 0,
      id: '1k'
    }
  ];

  constructor() {
   }

  getProducts() {
     return this.products;
  }
}
