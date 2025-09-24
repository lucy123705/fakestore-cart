# FakeStore Cart (React + Vite + Tailwind)

A simple React app that fetches products from the *Fake Store API* and lets users add items to a cart using a *modal*. Cart count is shown in the navbar, duplicate adds are blocked with an alert, and items can be removed from the modal.

## Live Demo
(After deploying to Netlify, paste your URL here)

## Features
- Fetches products from **https://fakestoreapi.com/products**
- Responsive product grid (image, title, price, Add to Cart)
- *Navbar* shows current cart count
- *Cart modal* opens from the navbar and lists all cart items
- *Remove* button to remove any item from the cart
- Prevents duplicates (shows alert: “Item already added to the cart”)
- Clean code with components and props

## Tech Stack
- React (Vite)
- Tailwind CSS
- JavaScript (Fetch API)

## Getting Started (Local)
```bash
# install dependencies
npm install

# start dev server
npm run dev
