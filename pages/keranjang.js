import { useEffect, useState } from "react";

export default function Keranjang() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const cancelOrder = () => {
    if (confirm("Yakin ingin cancel semua pesanan?")) {
      setCart([]); // kosongkan state
      localStorage.setItem("cart", JSON.stringify([])); // kosongkan storage
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Keranjang Belanja</h1>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <span>
                {item.name} - Rp{item.price}
              </span>
              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          ))}

          <button
            onClick={cancelOrder}
            className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          >
            ❌ Cancel Pesanan
          </button>
        </div>
      )}
    </div>
  );
}
