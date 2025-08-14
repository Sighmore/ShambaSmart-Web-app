import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.model';

// 1️⃣ Select the cart feature slice
export const selectCartState = createFeatureSelector<CartState>('cart');

// 2️⃣ Select all cart items
export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

// 3️⃣ Select total number of items in the cart
export const selectCartCount = createSelector(
  selectCartState,
  (state: CartState) =>
    state.items.reduce((count, item) => {
      return count + item.details.reduce((sum, detail) => sum + detail.quantity, 0);
    }, 0)
);

// 4️⃣ Select total price of the cart
export const selectCartTotal = createSelector(
  selectCartState,
  (state: CartState) => state.total
);
