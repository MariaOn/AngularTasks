import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // Так читать проще
  products: Array<ProductModel> = [
    {
      productName: 'potato',
      productPrice: 1,
      productDescription: 'tasty'
    },
    {
      productName: 'potato lux',
      productPrice: 2,
      productDescription: 'very tasty'
    },
    {
      productName: 'carrot',
      productPrice: 1,
      productDescription: 'orange'
    }
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
}
