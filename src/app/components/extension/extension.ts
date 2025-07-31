import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extension',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extension.html',
  styleUrls: ['./extension.scss']
})
export class Extension {
  adviceList = [
    {
      title: 'Preparing Your Soil Before Planting',
      crop: 'Maize',
      region: 'Rift Valley',
      summary: 'Proper tilling, soil testing, and fertilization are essential before the rains start. Avoid over-cultivation.',
      updatedAt: new Date()
    },
    {
      title: 'Dealing with Fall Armyworms',
      crop: 'Maize',
      region: 'Western',
      summary: 'Inspect leaves regularly and use recommended pesticides early. Consider intercropping with beans or legumes.',
      updatedAt: new Date()
    },
    {
      title: 'Best Time to Harvest Tomatoes',
      crop: 'Tomatoes',
      region: 'Central Kenya',
      summary: 'Harvest when fruits turn fully red but are still firm. Avoid late harvesting to reduce spoilage.',
      updatedAt: new Date()
    },
    {
      title: 'Drip Irrigation for Smallholder Farms',
      crop: 'General',
      region: 'Eastern Kenya',
      summary: 'Drip systems save water and increase yields. Start small and expand with reused bottles or low-cost kits.',
      updatedAt: new Date()
    }
  ];
}
