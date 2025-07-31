import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopService, FarmInput } from '../../services/shop';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Required for *ngFor, *ngIf, [(ngModel)]
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss'],
})
export class Shop {
  allInputs: FarmInput[] = [];
  filteredInputs: FarmInput[] = [];
  searchTerm: string = '';
  activeCategory: string = 'Seeds';

  constructor(private shopService: ShopService) {
    this.allInputs = this.shopService.getFarmInputs();
    this.filteredInputs = this.allInputs;
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.filterItems();
  }

  filterItems() {
    this.filteredInputs = this.allInputs.filter(item =>
      item.category === this.activeCategory &&
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
