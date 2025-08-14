import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, updateItemQuantity, clearCart } from './cart.actions';
import { CartState } from './cart.model';

export const initialState: CartState = {
  items: [],
  total: 0,
};


export const cartReducer = createReducer(
  initialState,

  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    total: state.items.reduce((sum, i) => sum + i.price, 0) + item.price,
  })),

  on(removeItem, (state, { itemId }) => {
    const filteredItems = state.items.filter(i => i.id !== itemId);
    const total = filteredItems.reduce((sum, i) => sum + i.price, 0);
    return {
      ...state,
      items: filteredItems,
      total,
    };
  }),

  on(updateItemQuantity, (state, { itemId, quantity }) => {
    const updatedItems = state.items.map(i => {
      if (i.id === itemId) {
        const updatedPrice =
          i.details.reduce((sum, d) => sum + d.price * quantity, 0);
        return { ...i, details: i.details.map(d => ({ ...d, quantity })), price: updatedPrice };
      }
      return i;
    });
    const total = updatedItems.reduce((sum, i) => sum + i.price, 0);
    return { ...state, items: updatedItems, total };
  }),

  on(clearCart, state => ({ ...state, items: [], total: 0 }))
);
