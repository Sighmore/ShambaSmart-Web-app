
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact form submitted:', this.contact);
    alert('Thanks for reaching out. We’ll get back to you shortly!');
    this.contact = { name: '', email: '', message: '' };
  }
}
