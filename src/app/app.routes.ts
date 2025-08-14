
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Shop } from './components/shop/shop';
import { Extension } from './components/extension/extension';
import { SignIn } from './components/sign-in/sign-in';
import { SignUp } from './components/sign-up/sign-up';
import { Forums } from './components/forums/forums';
import { Prices } from './components/prices/prices';
import { FarmerQueries } from './components/farmer-queries/farmer-queries';
import { About } from './components/about/about';
import { Faqs } from './components/faqs/faqs';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'shop', component: Shop },
  { path: 'extension', component: Extension },
  { path: 'signin', component: SignIn },
  { path: 'signup', component: SignUp },
  { path: 'forums', component: Forums},
  { path: 'prices', component: Prices },
  { path: 'farmer_queries', component: FarmerQueries },
  { path: 'about', component: About },
  { path: 'faqs',component: Faqs },
  { path: '**', redirectTo: '' }
];
