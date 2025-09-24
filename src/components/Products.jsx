import { useEffect, useState } from "react";

export default function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  // Fetch products when the component loads
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-md shadow-sm bg-white flex flex-col"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain mb-4"
          />

          <h3 className="font-semibold text-sm">{product.title}</h3>
          <p className="text-gray-700 font-bold mt-2">${product.price}</p>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="mt-auto bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
