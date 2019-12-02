import { Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component.component';

@NgModule({
    declarations: [FirstComponentComponent],
    exports: [
        FirstComponentComponent
    ],
    imports: [
      CommonModule
    ]
  })
// Не очень понятно, почему так модуль назван?
export class Category {
    @Input() category: category;
}

enum category {
    Food = 'FOOD',
    Clothes = 'CLOTHES',
  }


