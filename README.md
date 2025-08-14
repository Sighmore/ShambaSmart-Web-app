# ShambaSmart

**ShambaSmart** is a modern Angular web application designed to empower Kenyan farmers by providing a trusted digital platform for agricultural inputs, advice, and community support. The app leverages **NgRx for state management**, persists data in **localStorage**, and implements a fully functional **shopping cart** to ensure safe, reliable purchases.

---

## Table of Contents

- [ShambaSmart](#shambasmart)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Problem Statement](#problem-statement)
  - [Architecture \& Tech Stack](#architecture--tech-stack)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [State Management](#state-management)
  - [Shopping Cart](#shopping-cart)
  - [Contributing](#contributing)
  - [License](#license)

---

## Features

1. **Trusted Farm Inputs Shop**  
   - Browse and purchase seeds, fertilizers, and chemicals.  
   - Prevents counterfeit products by offering verified inputs.  

2. **Extension Advice**  
   - Get agricultural guidance tailored to your crops and farming practices.  

3. **Agricultural Forum**  
   - Ask questions, share insights, and engage with a community of farmers.  

4. **Current Market Prices**  
   - View real-time market prices for crops and farm products.  

5. **Shopping Cart**  
   - Fully functional cart system with quantity management.  
   - Persists cart data in **localStorage**.  

6. **Search & Filter**  
   - Quickly find products by category or keyword.  

7. **Responsive Design**  
   - Optimized for mobile and desktop screens.  

---

## Problem Statement

Farmers in Kenya often struggle with **counterfeit agricultural inputs**, unreliable market pricing, and limited access to extension advice. ShambaSmart solves this by:  

- Providing a **verified shop** for high-quality seeds, fertilizers, and chemicals.  
- Offering **extension advice** to improve farm productivity.  
- Providing a **community forum** for farmer collaboration.  
- Displaying **current market prices** to support better decision-making.  

---

## Architecture & Tech Stack

- **Frontend Framework:** Angular (Standalone components)  
- **State Management:** NgRx (Store, Actions, Reducers, Effects)  
- **Data Persistence:** LocalStorage  
- **HTTP & API Integration:** Angular HttpClient  
- **Styling:** SCSS / CSS3  
- **Other Libraries:** RxJS, Angular Forms  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/shambasmart.git
cd shambasmart
````

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
ng serve
```

4. Navigate to `http://localhost:4200/` in your browser.

---

## Usage

* Browse products in the **Shop** section.
* Add items to the **Cart**, adjust quantities, and checkout.
* Access **Extension Advice** for expert guidance.
* Join the **Forum** to ask questions or respond to discussions.
* Check **Market Prices** for up-to-date crop values.

---

## Folder Structure

```
src/
├── app/
│   ├── store/
│   │   ├── cart/
│   │   │   ├── cart.actions.ts
│   │   │   ├── cart.reducer.ts
│   │   │   ├── cart.selectors.ts
│   │   │   └── cart.effects.ts
│   │   └── comments/
│   │       ├── comments.actions.ts
│   │       ├── comments.reducer.ts
│   │       ├── comments.selectors.ts
│   │       └── comments.effects.ts
│   ├── services/
│   │   └── shop.service.ts
│   ├── shop/
│   │   ├── shop.component.ts
│   │   ├── shop.html
│   │   └── shop.scss
│   └── cart/
│       ├── cart.component.ts
│       ├── cart.html
│       └── cart.scss
```

---

## State Management

* **Cart State:** Tracks items, quantity, and total price.
* **Comments/Forum State:** Tracks forum posts, loading status, and errors.
* **Effects:** Sync cart with localStorage, fetch forum data via APIs.
* **Selectors:** Access cart items, total, and comments from components.

---

## Shopping Cart

* Add/remove items from the cart.
* Update item quantities.
* Cart total is automatically calculated.
* Cart persists across page reloads using **localStorage**.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make changes and commit: `git commit -m "Add your message"`.
4. Push to your branch: `git push origin feature/your-feature`.
5. Open a pull request for review.

---

## License

MIT License © 2025 — [simon](https://github.com/Sighmore)

```

---

This Markdown version is **ready to paste directly into GitHub**, supports code blocks, headings, lists, and is fully structured for clarity.  

I can also create an **enhanced version with badges, screenshots, and API usage examples** for a professional README look.  

Do you want me to generate that version too?
```
