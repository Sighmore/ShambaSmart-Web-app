import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem, CartState } from '../../ngrx/cart/cart.model';
import { selectCartItems, selectCartTotal } from '../../ngrx/cart/cart.selector';
import { CheckoutService } from './../../services/checkout/checkout';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout {

selectedTab: any;

 cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;
  constructor(private readonly store: Store<CartState>,private readonly checkoutService: CheckoutService) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartTotal$ = this.store.select(selectCartTotal);
  }



  payWithMpesa() {

    this.checkoutService.payWithMpesa();

}
payWithPaypal() {

  this.checkoutService.payWithPaypal();

}
payWithStripe() {

  this.checkoutService.processPayWithStripe();

}
 

}
