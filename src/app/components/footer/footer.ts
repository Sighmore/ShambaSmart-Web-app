import { Component, signal } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-footer',
  imports: [Button],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {


  currentYear = signal(new Date().getFullYear());


}
