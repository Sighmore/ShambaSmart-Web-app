import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesService } from '../../services/prices/pricesService';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices.html',
  styleUrls: ['./prices.scss']
})
export class Prices implements OnInit {

 marketPrices: any;

  //injecting the PricesService
  constructor(private readonly pricesService: PricesService) {}

 ngOnInit() {
    // Fetching market prices from the service
    this.marketPrices = this.pricesService.getMarketPrices();
  }

}
