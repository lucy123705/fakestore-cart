import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CartModal from "./components/CartModal";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart (with duplicate check)
  const handleAddToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCart((prev) => [...prev, product]);
  };

  // Remove item by id
  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar count={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome 👋</h1>
        <p className="mt-2 text-gray-700">
          Next we’ll fetch products and add them to the cart.
        </p>

        {/* Product list */}
        <Products onAddToCart={handleAddToCart} />
      </main>

      {/* Cart modal */}
      <CartModal
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
      />
    </>
  );
}