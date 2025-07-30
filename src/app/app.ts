import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Button } from './components/button/button';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home,Header,Footer,Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ShambaSmart Agriculture');
}
