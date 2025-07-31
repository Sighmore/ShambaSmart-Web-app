import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isDropdownOpen = false;

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation(); // prevent click from bubbling to document
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click')
  closeDropdown() {
    this.isDropdownOpen = false;
  }

  preventClose(event: MouseEvent) {
    event.stopPropagation(); // keep dropdown open when clicking inside
  }
}
