import { Component, OnInit, Input } from '@angular/core';
import { Category } from './category.module';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() isAvailable: boolean;
  category: Category;

  constructor() {

  }

  ngOnInit() {

  }

}
