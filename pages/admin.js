import { useEffect, useState } from "react";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const clearOrders = () => {
    if (window.confirm("Hapus semua order?")) {
      localStorage.removeItem("orders");
      setOrders([]);
    }
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#f4f1ea" }}>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📋 Admin - Order Masuk</h1>

        {orders.length === 0 ? (
          <p className="text-gray-600">Belum ada order masuk.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order, i) => (
              <div key={i} className="border p-4 rounded-lg bg-gray-50">
                <p><strong>Nama:</strong> {order.nama}</p>
                <p><strong>No HP:</strong> {order.noHp}</p>
                <p><strong>Metode:</strong> {order.metode}</p>
                <p><strong>Tanggal:</strong> {order.tanggal}</p>

                <h2 className="mt-3 font-bold">Pesanan:</h2>
                <ul className="list-disc list-inside">
                  {order.cart.map((item, idx) => (
                    <li key={idx}>
                      {item.name} - Rp{item.price.toLocaleString("id-ID")}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 font-bold text-lg">
                  Total: Rp{order.total.toLocaleString("id-ID")}
                </p>
              </div>
            ))}

            <button
              onClick={clearOrders}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            >
              🗑 Hapus Semua Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

