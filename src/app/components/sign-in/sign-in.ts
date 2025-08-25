import { SigninService } from './../../services/auth/signin/signin';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss']
})
export class SignIn {
  email = '';
  password = '';
  error = '';

  constructor( private readonly signinService: SigninService){}

  onSubmit() {
    if (!this.email || !this.password) {
      this.error = 'Please enter both email and password';
      return;
    }


      // Placeholder auth logic
    if (this.email === 'farmer@example.com' && this.password === 'password123') {
      this.error = '';


      this.signinService.login(this.email, this.password)

      alert('Login successful!');
      // Navigate to dashboard/shop if needed
    }
    



   else {
      this.error = 'Invalid email or password';
    }
  }
}
