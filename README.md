# 🍽️ Restaurant App Enhancement

A full-featured React restaurant ordering application with authentication, menu browsing, and cart management.

🔗 **Live Demo:** [https://sharurestaurant.ccbp.tech](https://sharurestaurant.ccbp.tech)

---

## 📌 Project Overview

This is an enhanced version of the Restaurant App built with React. Users can log in, browse menu items by category, add dishes to the cart, and manage their cart — all with a smooth, responsive UI.

---

## ✨ Features

### 🔐 Login Route (`/login`)
- Authenticate using username and password via the CCBP Login API
- JWT token stored securely using `js-cookie`
- Redirects authenticated users directly to the Home route
- Displays error messages on invalid credentials

### 🏠 Home Route (`/`)
- Displays restaurant name fetched from the API
- Browse menu items across multiple category tabs
- Increase/decrease dish quantity using `+` / `-` buttons
- **ADD TO CART** button appears when dish is available and quantity > 0
- Cart icon in header shows live count of unique items
- Logout button clears session and redirects to Login

### 🛒 Cart Route (`/cart`)
- Lists all added cart items with image, name, price, and quantity
- `+` / `-` buttons to update quantity per item (item removed when quantity reaches 0)
- **Remove** button to delete individual items
- **Remove All** button to clear the entire cart
- Shows empty cart image when cart is empty
- Total order price calculated dynamically

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 17 | UI framework |
| React Router DOM v5 | Client-side routing |
| React Context API | Global cart state management |
| js-cookie | JWT token storage |
| CSS3 | Custom styling |

---

## 📁 Project Structure

```
src/
├── context/
│   └── CartContext.js          # Global cart state & methods
├── components/
│   ├── Header/                 # Nav bar with cart icon, logout
│   ├── Login/                  # Login form with API auth
│   ├── Home/                   # Main menu page
│   ├── Cart/                   # Cart page
│   ├── CartItem/               # Individual cart item
│   ├── DishCard/               # Individual dish card
│   ├── DishList/               # List of dishes
│   ├── CategoryTabs/           # Menu category tabs
│   ├── Counter/                # +/- quantity counter
│   └── Loader/                 # Loading spinner
└── App.js                      # Routes + Context Provider
```

---

## 🔌 API Details

### Login API
- **URL:** `https://apis.ccbp.in/login`
- **Method:** POST
- **Credentials:** `{ "username": "rahul", "password": "rahul@2021" }`

### Restaurant Menu API
- **URL:** `https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details`
- **Method:** GET

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/goulipsharathkumar/Restaurant-App.git

# Navigate into the project
cd Restaurant-App

# Install dependencies
npm install

# Start the development server
npm start
```

App runs at `http://localhost:3000`

---

## 🔒 Route Protection

| Route | Authenticated | Unauthenticated |
|---|---|---|
| `/` | ✅ Home page | ❌ Redirects to `/login` |
| `/cart` | ✅ Cart page | ❌ Redirects to `/login` |
| `/login` | ❌ Redirects to `/` | ✅ Login page |

---

## 🧠 Context API Structure

```js
CartContext = {
  cartList,                    // Array of cart items
  addCartItem(dish),           // Add or increment dish
  removeCartItem(dishId),      // Remove dish completely
  removeAllCartItems(),        // Clear entire cart
  incrementCartItemQuantity(dishId),
  decrementCartItemQuantity(dishId),
}
```

---

## 📸 Screenshots

| Page | Description |
|---|---|
| Login | Clean login form with error handling |
| Home | Tabbed menu with dish cards and cart integration |
| Cart | Full cart management with quantity controls |

---

## 👨‍💻 Author

**Goulip Sharath Kumar**  
GitHub: [@goulipsharathkumar](https://github.com/goulipsharathkumar)  
Live App: [https://sharurestaurant.ccbp.tech](https://sharurestaurant.ccbp.tech)


