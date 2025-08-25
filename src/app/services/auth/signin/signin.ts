import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  login(email: string, password: string){
    throw new Error('Method not implemented.');

    //call a backend API to authenticate the user

  }


  
}
