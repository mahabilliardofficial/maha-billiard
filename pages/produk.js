import { useState, useEffect } from "react";

export default function Produk() {
  const produkList = [
    { nama: "Meja Billiard Premium", harga: "Rp15.000.000" },
    { nama: "Stick Billiard Import", harga: "Rp750.000" },
    { nama: "Bola Set Aramith", harga: "Rp1.200.000" },
  ];

  const [cart, setCart] = useState([]);

  // Load cart dari localStorage saat pertama kali buka
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Simpan cart ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.nama} berhasil ditambahkan ke keranjang!`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📦 Produk Kami</h1>
      <ul>
        {produkList.map((item, index) => (
          <li key={index} style={{ marginBottom: 10 }}>
            {item.nama} — <strong>{item.harga}</strong>
            <button
              onClick={() => addToCart(item)}
              style={{
                marginLeft: 10,
                padding: "5px 10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              Tambah ke Keranjang
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
