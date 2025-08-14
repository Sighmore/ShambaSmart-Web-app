import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ShopService, FarmInput } from '../../services/shop';
import { CartItem, CartItemDetail, CartState } from '../../ngrx/cart/cart.model';
import { addItem } from '../../ngrx/cart/cart.actions';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss'],
})
export class Shop {
  allInputs: FarmInput[] = [];
  filteredInputs: FarmInput[] = [];
  searchTerm: string = '';
  activeCategory: string = 'Seeds';

  constructor(
    private readonly shopService: ShopService,
    private readonly store: Store<CartState>
  ) {
    this.allInputs = this.shopService.getFarmInputs();
    this.filteredInputs = this.allInputs;
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.filterItems();
  }

  filterItems() {
    this.filteredInputs = this.allInputs.filter(
      (item) =>
        item.category === this.activeCategory &&
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Dispatch an action to add the item to the cart
  addToCart(item: FarmInput, quantity: number = 1) {
    const detail: CartItemDetail = {
      id: String(item.id),
      name: item.name,
      quantity,
      price: item.price * quantity
    };

    const cartItem: CartItem = {
      id: String(item.id),
      name: item.name,
      details: [detail],
      price: detail.price
    };

    this.store.dispatch(addItem({ item: cartItem }));
    console.log('Added to cart:', cartItem);
  }
}
