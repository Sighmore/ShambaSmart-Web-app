import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  testimonials = [
    { quote: 'ShambaSmart helped me double my harvest.', author: 'Mary, Nakuru' },
    { quote: 'I found affordable farm inputs in just minutes.', author: 'James, Eldoret' },
    { quote: 'Their extension advice saved my maize crop.', author: 'Amina, Kisii' },
    { quote: 'The market insights helped me get better prices.', author: 'John, Meru' },
    { quote: 'I love the community support on ShambaSmart.',author: 'Grace, Bungoma' },
    { quote: 'ShambaSmart made farming easier for me.', author: 'Peter, Kisumu' },
    { quote: 'I can now access quality seeds easily.', author: 'Lilian, Nyeri' },
    { quote: 'Their weather updates are always accurate.', author: 'David, Mombasa' },
  ];

  activeTestimonial = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    }, 6000); // change testimonial every 4 seconds
  }

}

