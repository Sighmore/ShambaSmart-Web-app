
// cart.state.ts
export interface CartState {
  items: CartItem[];
  total: number;
}

// comments.state.ts
export interface CommentsState {
  comments: Comment[];
  loading: boolean;
}

// cart.model.ts
export interface CartItemDetail {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

export interface CartItem {
    id: string;
    name: string;
    details: CartItemDetail[];
    price: number;
}