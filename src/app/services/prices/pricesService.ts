import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  marketPrices = [
    { product: 'Maize', unit: '90kg Bag', location: 'Eldoret', price: 4300, updatedAt: new Date() },
    { product: 'Beans', unit: '90kg Bag', location: 'Meru', price: 7600, updatedAt: new Date() },
    { product: 'Milk', unit: '1 Litre', location: 'Nairobi', price: 55, updatedAt: new Date() },
    { product: 'Potatoes', unit: '1 Kg', location: 'Nakuru', price: 80, updatedAt: new Date() },
    { product: 'Rice', unit: '1 Kg', location: 'Mombasa', price: 120, updatedAt: new Date() },
    { product: 'Sugar', unit: '1 Kg', location: 'Kisumu', price: 100, updatedAt: new Date() },
    { product: 'Cabbage', unit: '1 Kg', location: 'Eldoret', price: 40, updatedAt: new Date() },
    { product: 'Carrots', unit: '1 Kg', location: 'Nairobi', price: 60, updatedAt: new Date() },
    { product: 'Tomatoes', unit: '1 Kg', location: 'Nakuru', price: 120, updatedAt: new Date() },
    { product: 'Onions', unit: '1 Kg', location: 'Kitale', price: 100, updatedAt: new Date() }
  ];

    getMarketPrices(){
      
      return this.marketPrices;

    }
  
}
