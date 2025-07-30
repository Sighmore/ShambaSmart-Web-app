import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.html',
  styleUrl: './greetings.scss'
})
export class Greetings {

  message= input("hello Client");

}
