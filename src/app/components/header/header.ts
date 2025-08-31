import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectCartCount,
  selectCartTotal,
} from '../../ngrx/cart/cart.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  cartCount$: Observable<number>;
  cartTotal$: Observable<number>;

  // dropdown states
  isDropdownOpen = false; // auth dropdown
  isMenuOpen = false; // mobile menu
  isExtensionDropdownOpen = false; // extension advice/AI dropdown

  constructor(private readonly store: Store) {
    this.cartCount$ = this.store.select(selectCartCount);
    this.cartTotal$ = this.store.select(selectCartTotal);
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleExtensionDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isExtensionDropdownOpen = !this.isExtensionDropdownOpen;
  }


  @HostListener('document:click', ['$event'])
closeAll(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest('.hamburger') && !target.closest('.nav-links')) {
    this.isDropdownOpen = false;
    this.isMenuOpen = false;
    this.isExtensionDropdownOpen = false;
  }
}


  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
}
