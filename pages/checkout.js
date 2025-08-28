
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [metode, setMetode] = useState("Transfer Bank");
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const totalHarga = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      nama,
      noHp,
      metode,
      cart,
      total: totalHarga,
      tanggal: new Date().toLocaleString("id-ID"),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    localStorage.removeItem("cart");
    alert("Pesanan berhasil dibuat!");
    router.push("/admin");
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#fef3c7" }}>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">✅ Checkout</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Keranjang kosong.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">No HP</label>
              <input
                type="text"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Metode Pembayaran</label>
              <select
                value={metode}
                onChange={(e) => setMetode(e.target.value)}
                className="w-full border rounded-lg p-2"
              >
                <option>Transfer Bank</option>
                <option>COD</option>
                <option>QRIS</option>
              </select>
            </div>

            <p className="font-bold text-lg">
              Total: Rp{totalHarga.toLocaleString("id-ID")}
            </p>

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Buat Pesanan
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
