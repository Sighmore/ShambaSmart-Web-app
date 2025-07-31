import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.scss']
})
export class SignUp {
  user = {
    fullName: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('User Registered:', this.user);
    // Implement backend API call or router navigation here
  }
}
