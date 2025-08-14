import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart.model';

// Add an item to the cart
export const addItem = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);

// Remove an item from the cart by ID
export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ itemId: string }>()
);

// Update item quantity
export const updateItemQuantity = createAction(
  '[Cart] Update Item Quantity',
  props<{ itemId: string; quantity: number }>()
);

// Clear the cart
export const clearCart = createAction('[Cart] Clear Cart');
