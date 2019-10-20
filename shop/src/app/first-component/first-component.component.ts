import { Component, OnInit } from '@angular/core';


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
  name: string;
  description: string;
  price: number;
  category: category;
  isAvailable = true;

  constructor() { }

  ngOnInit() {
  }



}
