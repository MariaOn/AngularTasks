import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../../products/models/product-model';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() purchaseList: Array<ProductModel> = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.purchaseList = this.cartService.getPurchaseList();

  }

  onDelete() {
    return this.purchaseList = this.purchaseList.filter(purchase =>  purchase.id !== purchase.id);
  }

}
