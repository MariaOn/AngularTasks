import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './products/components/first-component/first-component.component';
import { ProductComponentComponent } from './products/components/product-component/product-component.component';
import { ProductListComponentComponent } from './products/components/product-list-component/product-list-component.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { CartItemComponent } from './carts/components/cart-item/cart-item.component';
import { CartListComponent } from './carts/components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    // Во втором задании эти компоненты необходимо разложить по отдельным модулям
    ProductComponentComponent,
    ProductListComponentComponent,
    CartComponent,
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Линтер выдает ошибки 
