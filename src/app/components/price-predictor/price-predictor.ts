import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price-predictor',
  imports: [CommonModule, FormsModule],
  templateUrl: './price-predictor.html',
  styleUrl: './price-predictor.scss'
})

export class PricePredictor implements OnInit {
  crops = ['Maize (90kg bag)', 'Beans (90kg bag)', 'Tomatoes (1 Kg)', 'Wheat (90kg bag)'];
  locations = ['Nakuru', 'Eldoret', 'Nairobi', 'Kisumu'];

  selectedCrop = '';
  selectedLocation = '';
  currentPrice: number | null = null;
  predictedPrices: { date: string; price: number }[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  predictPrice() {
    if (!this.selectedCrop || !this.selectedLocation) {
      this.errorMessage = 'Please select crop and location';
      return;
    }
    this.errorMessage = null;
    this.loading = true;

    // ⚡ Dummy API simulation — replace with NestJS backend call later
    setTimeout(() => {
      this.currentPrice = Math.floor(Math.random() * 200 + 100); // Random KES
      this.predictedPrices = Array.from({ length: 7 }).map((_, i) => ({
        date: new Date(Date.now() + i * 86400000).toISOString(),
        price: this.currentPrice! + Math.floor(Math.random() * 20 - 10)
      }));
      this.loading = false;
    }, 1500);
  }
}
