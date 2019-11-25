import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
  @Input() name: string;
  @Input() price: number;
  @Input() description: string;
  @Input() quantity: number;

  constructor() { }

}
