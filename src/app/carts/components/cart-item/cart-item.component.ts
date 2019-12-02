import { Component, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() name: string;
  @Input() price: number;
  quantity = 1;
  // Renderer2 класс необходимо использовать
  constructor(private el: ElementRef, private renderer: Renderer) { }

  onAdd() {
    return this.quantity++;
  }
  onSubstract() {
    return this.quantity--;
  }

  @HostListener('mouseover') onMouseOver() {
    const part = this.el.nativeElement.querySelector('.card-item');
    this.renderer.setElementStyle(part, 'backgroundColor', 'grey');
  }

  @HostListener('mouseout') onMouseOut() {
    // тут можно const part
    let part = this.el.nativeElement.querySelector('.card-item');
    this.renderer.setElementStyle(part, 'backgroundColor', 'white');
  }
}
