import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  testimonials = [
    { quote: 'ShambaSmart helped me double my harvest.', author: 'Mary, Nakuru' },
    { quote: 'I found affordable farm inputs in just minutes.', author: 'James, Eldoret' },
    { quote: 'Their extension advice saved my maize crop.', author: 'Amina, Kisii' }
  ];

  activeTestimonial = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    }, 4000); // change testimonial every 4 seconds
  }

}

