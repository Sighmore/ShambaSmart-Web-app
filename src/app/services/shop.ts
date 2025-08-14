import { Injectable } from '@angular/core';

export interface FarmInput {
  id: number;
  name: string;
  image: string;
  price: number;
  category: 'Seeds' | 'Fertilizers' | 'Chemicals';
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private readonly inputs: FarmInput[] = [
  { id: 1, name: 'Maize Seed Hybrid 614', image: 'images/614.png', price: 300, category: 'Seeds' },
  { id: 2, name: 'D.A.P Fertilizer', image: 'images/Dap.png', price: 2500, category: 'Fertilizers' },
  { id: 3, name: 'Roundup Herbicide', image: 'images/roundup.png', price: 800, category: 'Chemicals' },
  { id: 4, name: 'Tomato Seed Roma VF', image: 'images/tomato.png', price: 150, category: 'Seeds' },
  { id: 5, name: 'Urea Fertilizer', image: 'images/urea.png', price: 2200, category: 'Fertilizers' },
];

  getFarmInputs(): FarmInput[] {
    return this.inputs;
  }
}
