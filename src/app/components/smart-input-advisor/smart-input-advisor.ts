import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-input-advisor',
  imports: [CommonModule,FormsModule],
  templateUrl: './smart-input-advisor.html',
  styleUrl: './smart-input-advisor.scss'
})
export class SmartInputAdvisor {



  crops = ['Maize', 'Beans', 'Tomatoes', 'Wheat'];
  regions = ['Nakuru', 'Eldoret', 'Kisumu', 'Meru'];
  seasons = ['Planting', 'Mid-season', 'Harvest'];

  selectedCrop: string = '';
  selectedRegion: string = '';
  selectedSeason: string = '';
  acreage: number = 0;

  recommendation: Recommendation | null = null;

  getRecommendations() {
    // Dummy logic – replace later with backend AI/Rule API
    const baseCost = this.acreage * 4500;
    this.recommendation = {
      crop: this.selectedCrop,
      fertilizer: this.selectedSeason === 'Planting' ? 'DAP' : 'CAN',
      pesticide: this.selectedSeason === 'Mid-season' ? 'Fungicide' : 'Insecticide',
      cost: baseCost
    };
  }

  findNearByAgrovet() {
    alert('Feature coming soon: Locate nearby agrovet dealers.');
  }

  buyInputs() {
    alert('Feature coming soon: Buy inputs directly from app.');
  }
}

interface Recommendation {
  crop: string;
  fertilizer: string;
  pesticide: string;
  cost: number;
}