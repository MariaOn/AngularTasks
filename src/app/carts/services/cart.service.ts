import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private purchaseList = [];

  constructor() { }

  getPurchaseList() {
    return this.purchaseList;
  }
}
