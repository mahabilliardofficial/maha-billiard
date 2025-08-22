
import { useState, useEffect } from "react";

export default function Keranjang() {
  const [cart, setCart] = useState([]);
  const nomorWA = "6285602348052";

  // Load cart dari localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Checkout ke WhatsApp
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }

    let pesan = "Halo Maha Billiard, saya ingin memesan:\n\n";
    cart.forEach((item, index) => {
      pesan += `${index + 1}. ${item.nama} - ${item.harga}\n`;
    });

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Keranjang Belanja</h1>
      {cart.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.nama} — <strong>{item.harga}</strong>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleCheckout}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Checkout via WhatsApp
      </button>
    </div>
  );
}
