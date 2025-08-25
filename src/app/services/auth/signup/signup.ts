import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  createAccount(user?: { fullName: string; email: string; password: string; }){
    throw new Error('Method not implemented.');
  }
  
}
