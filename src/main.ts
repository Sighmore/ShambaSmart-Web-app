import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // your app.component.ts
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // the routes you defined

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
// This file is the entry point for your Angular application.
// It bootstraps the App component and provides the router configuration.