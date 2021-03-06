import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product-model';
import { ProductServiceService } from '../../services/product-service.service';
import { CartService } from '../../../carts/services/cart.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: ProductModel[];
  purchaseList: ProductModel[] = [];

  constructor(private productService: ProductServiceService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.purchaseList = this.cartService.getPurchaseList();
  }

  onBuy(product: ProductModel) {
    return this.cartService.updatePurchaseList(product);
  }

}
