import { SignupService } from './../../services/auth/signup/signup';
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

constructor(private readonly signupService: SignupService){}

  user = {
    fullName: '',
    email: '',
    password: ''
  };

  onSubmit() {

    this.signupService.createAccount(this.user)
    console.log('User Registered:', this.user);


    // Implement backend API call or router navigation here
  }

 
}
