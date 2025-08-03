import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'] // plural: styleUrls for array
})
export class Header {
  isDropdownOpen = false;
  isMenuOpen = false;

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation(); // prevent bubbling up
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click')
  closeAll() {
    this.isDropdownOpen = false;
    this.isMenuOpen = false;
  }

  preventClose(event: MouseEvent) {
    event.stopPropagation(); // allow interactions inside dropdown
  }
}
