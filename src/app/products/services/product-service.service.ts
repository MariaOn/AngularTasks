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
      description: 'tasty'
    },
    {
      name: 'potato lux',
      price: 2,
      description: 'very tasty'
    },
    {
      name: 'carrot',
      price: 1,
      description: 'orange'
    }
  ];

  constructor() {
   }

  getProducts() {
     return this.products;
  }
}
