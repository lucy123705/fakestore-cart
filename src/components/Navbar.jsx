export default function Navbar({ count, onOpenCart }) {
  return (
    <header className="bg-white border-b sticky top-0">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="font-semibold text-lg">🛒 React Cart</div>

        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center gap-2 border px-3 py-1.5 rounded-md hover:bg-gray-50"
          aria-label="Open Cart"
        >
          <span>Cart</span>
          <span className="inline-flex items-center justify-center min-w-6 h-6 text-sm bg-black text-white rounded-full px-2">
            {count}
          </span>
        </button>
      </nav>
    </header>
  );
}