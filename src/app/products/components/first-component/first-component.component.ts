import { Component, OnInit, Input } from '@angular/core';


// вынести в отдельный модуль
enum category {
  Food = 'FOOD',
  Clothes = 'CLOTHES',
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})


export class FirstComponentComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() category: category;
  @Input() isAvailable: boolean;


  constructor() {

  }

  ngOnInit() {

  }



}
