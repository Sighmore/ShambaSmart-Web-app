import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 message = signal("hello Simon");

 keyUpHandler(){
  console.log("user typed something")
 }

}
