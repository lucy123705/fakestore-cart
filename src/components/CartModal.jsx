export default function CartModal({ open, onClose, cart, onRemove }) {
  if (!open) return null; // don't render if closed

  return (
    <div className="fixed inset-0 z-50">
      {/* dark overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* modal panel */}
      <div className="absolute inset-x-0 top-16 mx-auto max-w-2xl bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Your Cart ({cart.length})</h2>
          <button
            onClick={onClose}
            className="border px-2 py-1 rounded-md hover:bg-gray-50"
          >
            Close
          </button>
        </div>

        <div className="max-h-[60vh] overflow-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded-md p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm font-semibold mt-1">${item.price}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-sm border px-3 py-1 rounded-md hover:bg-gray-50"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}