# Shoppers: Shopping Cart Application

## **Overview**

Shoppers is a React-based e-commerce application that fetches product data from the Fake Store API and provides an interactive shopping experience. Users can browse products, add them to a cart or favorites list, modify item quantities, and view dynamically updated totals. This project demonstrates the use of React Router, state management, and responsive design.

---

## **Features**

### **Product Listing**
- Fetches products from the Fake Store API and displays them with:
  - Product image
  - Name
  - Price
  - "Add to Cart" and "Add to Favorites" buttons.
- Allows users to filter products by category.

### **Cart Functionality**
- Displays items added to the cart with:
  - Product name
  - Unit price
  - Quantity controls (increase/decrease quantity or remove product)
  - Subtotal (price × quantity).
- Dynamically calculates and displays:
  - Total price
  - Final price (10% discount applied to total).

### **Favorites**
- Users can add products to a "Favorites" list.
- Products can be removed from the Favorites list.

### **Routing**
- Navigate between:
  - Home page (Product listing)
  - Cart page
  - Favorites page.

### **Responsive Design**
- Fully responsive layout for an optimal user experience on all devices.

---

## **Tech Stack**

- **Frontend Framework**: React.js
- **Styling**: CSS
- **Routing**: React Router
- **API**: Fake Store API (`https://fakestoreapi.com/products`)

---

## **Setup Instructions**

### **Prerequisites**
- Node.js and npm/yarn installed.

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/vaibhavapriya/ECommerce-Cart.git
   cd ECommerce-Cart
   cd router-ecom
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```plaintext
   http://localhost:3000
   ```

---

## **Usage**

### **Home Page**
- Browse products fetched from the Fake Store API.
- Filter products by categories using the filter dropdown.
- Add products to the cart or favorites list.

### **Cart Page**
- View items in the cart.
- Modify quantities using "+" or "-" buttons.
- Remove products using the "Remove" button.
- View dynamically updated totals and final discounted price.

### **Favorites Page**
- View and manage products in the favorites list.
- Remove items from favorites.

---

## **Project Structure**

```plaintext
src/
├── components/
│   ├── Cart.jsx           # Cart page component
│   ├── Fav.jsx            # Favorites page component
│   ├── List.jsx           # Product listing page
│   ├── Navbar.jsx         # Navbar with category filter
│   ├── Quantity.jsx       # Quantity adjustment component
├── App.css               # Main CSS file
├── App.js                # Root component with routing
├── index.js              # React entry point
```

---
