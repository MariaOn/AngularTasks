import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../../products/models/product-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() purchaseList: Array<ProductModel> = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.purchaseList = this.cartService.getPurchaseList();

  }

}
