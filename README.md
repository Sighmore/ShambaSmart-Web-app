# ShambaSmart (Angular)

> A production‑grade Angular web app that helps Kenyan farmers discover **trusted inputs**, get **extension advice**, and **buy safely** — with **NgRx** state management, **Stripe / M‑Pesa / PayPal** checkout, and **JWT + OAuth2 (PKCE)** authentication.

---

## Table of Contents

- [ShambaSmart (Angular)](#shambasmart-angular)
  - [Table of Contents](#table-of-contents)
  - [Problem Statement](#problem-statement)
  - [Features](#features)
  - [Architecture \& Tech Stack](#architecture--tech-stack)
  - [Secreenshots](#secreenshots)
  - [Prerequisites](#prerequisites)
  - [Quick Start](#quick-start)
  - [Configuration](#configuration)
  - [Folder Structure](#folder-structure)
  - [State Management](#state-management)
    - [Store slices](#store-slices)
    - [LocalStorage persistence (meta‑reducer)](#localstorage-persistence-metareducer)
    - [Selectors](#selectors)
    - [Effects](#effects)
  - [Authentication](#authentication)
    - [JWT Flow](#jwt-flow)
    - [OAuth2 (PKCE) Flow](#oauth2-pkce-flow)
    - [Guards, Interceptors, Token Refresh](#guards-interceptors-token-refresh)

---

## Problem Statement

Kenyan farmers face **counterfeit inputs**, fragmented advice, and unreliable pricing. ShambaSmart solves this by:

* Curating a **verified shop** for seeds, fertilizers, crop care.
* Providing **extension advice** and community Q\&A.
* Enabling **secure payments** (card, mobile money, PayPal) and **trusted fulfillment**.

---

## Features

1. **Product Catalog & Search** — categories, filters, pagination, caching.
2. **Cart & Checkout** — quantity controls; saved carts; guest → checkout; Stripe / M‑Pesa / PayPal.
3. **Auth** — email/password (**JWT**), and **OAuth2 (PKCE)** (Google/Microsoft/etc.).
4. **NgRx State** — Store + Effects + Entity; strict immutability; feature modules; devtools.
5. **Offline‑friendly** — cart and session persisted in **localStorage**.
6. **Responsive UI** — Mobile‑first, accessible components.
7. **Extensibility** — clean API boundary, environment‑based URLs, schematics‑ready.

---

## Architecture & Tech Stack

```
┌───────────────────────┐        ┌──────────────────────────┐
│      Angular App      │        │     API Gateway (BE)     │
│  Components / Routes  │◀──────▶│  Auth, Catalog, Orders   │
│  NgRx Store & Effects │        │  Payments adapters        │
└─────────┬─────────────┘        └───────────┬──────────────┘
          │                                  │
          │                                  │
   ┌──────▼──────┐                   ┌───────▼────────┐
   │ localStorage│                   │ Payment Providers│
   │ (cart, auth)│                   │ Stripe | M‑Pesa  │
   └─────────────┘                   │ PayPal          │
                                     └─────────────────┘
```

* **Angular** 17+ (standalone components)
* **NgRx**: Store, Effects, Entity, Router‑Store, Store‑Devtools
* **Payments**: Stripe, M‑Pesa (Safaricom Daraja), PayPal
* **Auth**: JWT (NestJS or any backend), OAuth2 with PKCE (e.g., Google)
* **Tooling**: RxJS, Angular Forms, ESLint, Prettier, Jest/Karma

> **Note**: Payments require a **companion backend** for secrets/webhooks. Example endpoints are listed below; adapt to your NestJS gateway.

---

## Secreenshots

<img width="1348" height="639" alt="Screenshot Capture - 2025-08-29 - 10-17-31" src="https://github.com/user-attachments/assets/bed743cc-ddda-404f-865f-9a9ca5ee6a7f" />
<img width="1339" height="636" alt="Screenshot Capture - 2025-08-29 - 10-17-50" src="https://github.com/user-attachments/assets/0d6035ac-de43-417a-96b0-9fca6214a0a7" />
<img width="1345" height="641" alt="Screenshot Capture - 2025-08-29 - 10-18-08" src="https://github.com/user-attachments/assets/4e6b6213-be1b-4a75-a22f-72ccf667cd27" />
<img width="1315" height="639" alt="Screenshot Capture - 2025-08-29 - 10-18-16" src="https://github.com/user-attachments/assets/70f963b4-f5fe-4398-b2da-70870b0b4859" />
<img width="1339" height="641" alt="Screenshot Capture - 2025-08-29 - 10-18-37" src="https://github.com/user-attachments/assets/4dd033ec-9570-4268-9bc1-04b0a328bb7c" />
<img width="1331" height="642" alt="Screenshot Capture - 2025-08-29 - 10-19-55" src="https://github.com/user-attachments/assets/b5422c72-8c5e-4055-be8b-6a0652217b11" />
<img width="1327" height="530" alt="Screenshot Capture - 2025-08-29 - 10-19-43" src="https://github.com/user-attachments/assets/bc450efc-82d8-468c-9117-f706b502edb4" />
<img width="615" height="467" alt="Screenshot Capture - 2025-08-29 - 10-19-06" src="https://github.com/user-attachments/assets/8bc9f29d-2318-4c0d-bc7b-7d6f7114121d" />
<img width="582" height="505" alt="Screenshot Capture - 2025-08-29 - 10-19-02" src="https://github.com/user-attachments/assets/50b25920-87c9-47eb-98fd-a7358abc3dca" />
<img width="586" height="623" alt="Screenshot Capture - 2025-08-29 - 10-18-56" src="https://github.com/user-attachments/assets/5972a593-4640-4278-a1ff-1c7540a918a4" />
<img width="1344" height="638" alt="Screenshot Capture - 2025-08-29 - 10-18-47" src="https://github.com/user-attachments/assets/efc113d9-7a33-4a46-b976-2bb57e66f7d5" />
<img width="1321" height="637" alt="Screenshot Capture - 2025-08-29 - 10-18-25" src="https://github.com/user-attachments/assets/846cc6e8-da1d-4dfb-a80d-8fc1a0649d11" />


## Prerequisites

* Node.js 18+
* Angular CLI 17+
* Accounts/keys: **Stripe**, **Safaricom Daraja**, **PayPal** (Sandbox recommended)
* A backend (e.g., NestJS) exposing auth, catalog, order, and payment endpoints

---

## Quick Start

```bash
# 1) Clone and install
git clone https://github.com/Sighmore/ShambaSmart-Web-app.git
cd shambasmart-Web-app
npm install

# 2) Configure env (see Configuration)
cp src/environments/environment.example.ts src/environments/environment.ts

# 3) Run
ng serve -o
```

---

## Configuration

Create `src/environments/environment.ts` and `environment.prod.ts`:

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000', // your API gateway
  payments: {
    stripe: {
      publishableKey: 'pk_test_xxx',
    },
    mpesa: {
      // front only needs toggle + labels; STK push happens via backend
      enabled: true,
    },
    paypal: {
      clientId: 'PAYPAL_SANDBOX_CLIENT_ID',
      currency: 'KES',
    },
  },
  auth: {
    jwt: {
      storageKey: 'ss_token',
      refreshMarginSeconds: 120, // proactive refresh
    },
    oauth: {
      issuer: 'https://accounts.google.com',
      clientId: 'GOOGLE_CLIENT_ID',
      redirectUri: 'http://localhost:4200/auth/callback',
      scopes: ['openid', 'profile', 'email'],
    },
  },
  storageKeys: {
    cart: 'ss_cart_v1',
    auth: 'ss_auth_v1'
  }
};
```

> **Never put secrets in the frontend.** Stripe secret key, Daraja credentials, and PayPal client secret live on the backend only.

---

## Folder Structure

```
src/app/
├─ core/               # interceptors, guards, services used app‑wide
├─ features/
│  ├─ catalog/
│  ├─ cart/
│  ├─ checkout/
│  ├─ auth/
│  ├─ forum/
│  └─ advice/
├─ store/
│  ├─ app.actions.ts
│  ├─ app.reducer.ts
│  ├─ app.selectors.ts
│  ├─ meta.reducers.ts
│  └─ index.ts
├─ shared/             # ui components, pipes, models, util
└─ environments/
```

---

## State Management

We use **feature‑first NgRx**. Each feature has `actions.ts`, `reducer.ts`, `effects.ts`, and `selectors.ts`. Entities (products, orders) use `@ngrx/entity` for normalized state.

### Store slices

* `auth`: user, accessToken, refreshToken, status
* `catalog`: categories, products, filters, pagination
* `cart`: items (id, name, price, qty), totals, currency
* `checkout`: method (stripe|mpesa|paypal), clientSecret / orderId, status
* `orders`: current order, history
* `forum`/`advice`: threads, posts, loading

### LocalStorage persistence (meta‑reducer)

```ts
 // Persist cart to localStorage on any change
    this.persistCart$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(addItem, removeItem, updateItemQuantity, clearCart),
          withLatestFrom(this.store.select(state => state)), // get the latest cart slice
          tap(([action, cartState]) => {
            console.log('Persisting cart state to localStorage:', cartState);
            localStorage.setItem('cart', JSON.stringify(cartState));
          })
        ),
      { dispatch: false }
    );

    // Load cart from localStorage on app init
    this.loadCart$ = createEffect(() =>
      this.actions$.pipe(
        ofType('[App] Init'),
        mergeMap(() => {
          const storedCart = localStorage.getItem('cart');
          if (storedCart) {
            const cartState: CartState = JSON.parse(storedCart);
            console.log('Loaded cart from localStorage:', cartState);
            return of({ type: '[Cart] Load Cart Success', cart: cartState } as const);
          }
          console.log('No cart found in localStorage, starting with empty cart');
          return of({ type: '[Cart] Load Cart Empty' } as const);
        })
      )
    );
  }
}

```

> You can scope persistence to specific slices using `combineReducers` or wrapper reducers that only serialize the subset you need.

### Selectors

```ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.model';

//  Select the cart feature slice
export const selectCartState = createFeatureSelector<CartState>('cart');

//  Select all cart items
export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

//  Select total number of items in the cart
export const selectCartCount = createSelector(
  selectCartState,
  (state: CartState) =>
    state.items.reduce((count, item) => {
      return count + item.details.reduce((sum, detail) => sum + detail.quantity, 0);
    }, 0)
);

//  Select total price of the cart
export const selectCartTotal = createSelector(
  selectCartState,
  (state: CartState) => state.total
);

```

### Effects

```ts
// src/app/features/checkout/checkout.effects.ts
@Injectable()
export class CheckoutEffects {
  createStripePI$ = createEffect(() => this.actions$.pipe(
    ofType(CheckoutActions.createPaymentIntent),
    switchMap(({ amount, currency }) => this.http.post<{clientSecret:string}>(
      `${env.apiBaseUrl}/payments/stripe/intents`, { amount, currency }
    ).pipe(
      map(r => CheckoutActions.createPaymentIntentSuccess({ clientSecret: r.clientSecret })),
      catchError(err => of(CheckoutActions.createPaymentIntentFailure({ error: err })))
    ))
  ));

  constructor(private actions$: Actions, private http: HttpClient) {}
}
```

---

## Authentication

### JWT Flow

1. User logs in (email/password) → `POST /auth/login`.
2. Backend returns `{ accessToken, refreshToken, user }`.
3. Access token in memory; refresh token in httpOnly cookie or secure storage.
4. Interceptor attaches `Authorization: Bearer <accessToken>`.
5. Refresh before expiry via effect; logout clears state.

**Example:**

```ts
import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart.model';

// Add an item to the cart
export const addItem = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);

// Remove an item from the cart by ID
export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ itemId: string }>()
);

// Update item quantity
export const updateItemQuantity = createAction(
  '[Cart] Update Item Quantity',
  props<{ itemId: string; quantity: number }>()
);

// Clear the cart
export const clearCart = createAction('[Cart] Clear Cart');
```

### OAuth2 (PKCE) Flow

Use Authorization Code with **PKCE** (no client secret in SPA):

1. Redirect to provider (e.g., Google) with `code_challenge`.
2. Provider redirects back to `/auth/callback?code=...`.
3. Backend exchanges `code` → tokens, links/creates user, returns JWT.
4. Frontend stores JWT like normal login.

> Libraries like `angular-oauth2-oidc` or custom redirect flow both work. Keep the real token exchange on the **backend**.

### Guards, Interceptors, Token Refresh

```ts
// auth.guard.ts
export const authGuard: CanActivateFn = () => inject(Store).selectSignal(selectIsAuthed)();

// auth.interceptor.ts
@Injectable()
```
