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
    if (window.confirm("Yakin ingin cancel semua pesanan?")) {
      setCart([]);
      localStorage.removeItem("cart");
    }
  };

  const totalHarga = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#fef3c7" }}>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🛒 Keranjang Belanja</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Keranjang masih kosong</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 font-medium">
                  {item.name} - Rp{item.price.toLocaleString("id-ID")}
                </span>
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Hapus
                </button>
              </div>
            ))}

            {/* Total Harga */}
            <div className="flex justify-between items-center border-t pt-4 text-lg font-bold text-gray-800">
              <span>Total:</span>
              <span>Rp{totalHarga.toLocaleString("id-ID")}</span>
            </div>

            {/* Tombol Aksi */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={cancelOrder}
                className="flex-1 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
              >
                ❌ Cancel Pesanan
              </button>
              <button
                onClick={() => alert("Checkout belum nyambung ke pembayaran, mas 🙏")}
                className="flex-1 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                ✅ Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
