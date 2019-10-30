import { Component } from '@angular/core';
import { FirstComponentComponent } from './products/components/first-component/first-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
}
