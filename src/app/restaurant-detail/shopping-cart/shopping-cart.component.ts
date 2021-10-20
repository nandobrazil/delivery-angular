import { CartItem } from './cart-item.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item: CartItem){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item)
  }

  total(): number {
    return this.shoppingCartService.total()
  }

}
