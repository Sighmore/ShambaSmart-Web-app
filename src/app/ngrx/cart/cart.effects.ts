
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { addItem, removeItem, updateItemQuantity, clearCart } from './cart.actions';
import { tap, withLatestFrom, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CartState } from './cart.model';

@Injectable()
export class CartEffects {
  persistCart$;
  loadCart$;

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<CartState>
  ) {
    // Persist cart to localStorage on any change
    this.persistCart$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(addItem, removeItem, updateItemQuantity, clearCart),
          withLatestFrom(this.store.select(state => state)), // get the latest cart slice
          tap(([action, cartState]) => {
            console.log('Persisting cart state to localStorage:', cartState);
            localStorage.setItem('cart', JSON.stringify(cartState));
          })
        ),
      { dispatch: false }
    );

    // Load cart from localStorage on app init
    this.loadCart$ = createEffect(() =>
      this.actions$.pipe(
        ofType('[App] Init'),
        mergeMap(() => {
          const storedCart = localStorage.getItem('cart');
          if (storedCart) {
            const cartState: CartState = JSON.parse(storedCart);
            console.log('Loaded cart from localStorage:', cartState);
            return of({ type: '[Cart] Load Cart Success', cart: cartState } as const);
          }
          console.log('No cart found in localStorage, starting with empty cart');
          return of({ type: '[Cart] Load Cart Empty' } as const);
        })
      )
    );
  }
}
