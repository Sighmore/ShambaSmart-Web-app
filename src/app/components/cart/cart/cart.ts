import { RouterModule } from '@angular/router';
import { clearCart } from './../../../ngrx/cart/cart.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem, CartState } from '../../../ngrx/cart/cart.model';
import { selectCartItems, selectCartTotal } from '../../../ngrx/cart/cart.selector';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./cart.scss']
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;
  constructor(private readonly store: Store<CartState>) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartTotal$ = this.store.select(selectCartTotal);
  }



  // Dispatch clearCart action from the cart actions
    // Use a dialog-style popup instead of confirm
  clearCart() {
    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
      <form method="dialog" style="margin:0;">
        <div style="padding: 20px 30px; text-align: center;">
          <p style="font-size: 1.1rem; margin-bottom: 20px;">Are you sure you want to clear the cart?</p>
          <button id="yesBtn" style="background: #d32f2f; color: #fff; border: none; padding: 8px 18px; border-radius: 4px; margin-right: 10px; cursor: pointer;">Yes</button>
          <button id="noBtn" style="background: #e0e0e0; color: #333; border: none; padding: 8px 18px; border-radius: 4px; cursor: pointer;">No</button>
        </div>
      </form>
    `;
    dialog.style.border = 'none';
    dialog.style.borderRadius = '8px';
    dialog.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
    dialog.style.padding = '0';
    dialog.style.minWidth = '320px';

    document.body.appendChild(dialog);

    const yesBtn = dialog.querySelector('#yesBtn') as HTMLButtonElement;
    const noBtn = dialog.querySelector('#noBtn') as HTMLButtonElement;

    yesBtn.onclick = (e) => {
      e.preventDefault();
      this.store.dispatch(clearCart());
      dialog.close();
      dialog.remove();
    };

    noBtn.onclick = (e) => {
      e.preventDefault();
      dialog.close();
      dialog.remove();
    };

    dialog.showModal();
  }
}
