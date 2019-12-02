import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
  // Лучше оформить передачу модели, а не отдельных свойств
  @Input() name: string;
  @Input() price: number;
  @Input() description: string;
  @Input() quantity: number;

  constructor() { }

}
