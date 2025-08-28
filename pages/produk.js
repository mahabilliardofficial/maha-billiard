import { useState } from "react";

export default function Produk() {
  const produkList = [
    { name: "Meja Billiard Premium", price: 15000000 },
    { name: "Stick Billiard Import", price: 2500000 },
    { name: "Sarung Tangan Billiard", price: 150000 },
    { name: "Kapur Cue", price: 50000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`${item.name} ditambahkan ke keranjang ✅`);
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#faf3e0" }}>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🛍 Produk Kami</h1>
        <div className="grid gap-4">
          {produkList.map((item, i) => (
            <div key={i} className="flex justify-between items-center border p-4 rounded-lg bg-gray-50">
              <span className="text-gray-700 font-medium">
                {item.name} - Rp{item.price.toLocaleString("id-ID")}
              </span>
              <button
                onClick={() => addToCart(item)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Tambah
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
