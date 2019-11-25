import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  purchaseList: Array<ProductModel> = [];

  constructor() { }

  getPurchaseList() {
    return this.purchaseList;
  }

  updatePurchaseList(product: ProductModel) {
    return this.purchaseList.push(product);
  }

  deleteFromPurchaseList() {
    return this.purchaseList = this.purchaseList.filter(purchase =>  purchase.name !== purchase.name);
  }

}
