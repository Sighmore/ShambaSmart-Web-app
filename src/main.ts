import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { CommentsEffects } from './app/ngrx/comments/comments.effects';
import { commentsReducer } from './app/ngrx/comments/comments.reducer';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),

    // HttpClient (should be before Effects if Effects depend on HttpClient)
    provideHttpClient(withInterceptorsFromDi()),

    // Store always first
    provideStore({ comments: commentsReducer }),

    // Effects — pass array here (this will also provide Actions)
    provideEffects([CommentsEffects]),

    // DevTools
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ]
});
