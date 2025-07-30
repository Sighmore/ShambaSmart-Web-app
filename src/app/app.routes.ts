
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Shop } from './components/shop/shop';
import { Extension } from './components/extension/extension';
import { SignIn } from './components/sign-in/sign-in';
import { SignUp } from './components/sign-up/sign-up';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'shop', component: Shop },
  { path: 'extension', component: Extension },
  { path: 'signin', component: SignIn },
  { path: 'signup', component: SignUp },
  { path: '**', redirectTo: '' }
];
