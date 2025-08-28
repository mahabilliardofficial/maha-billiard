import Link from "next/link";

export default function Home() {
  const products = [
    { name: "Meja Billiard", price: 5000000 },
    { name: "Stick Premium", price: 750000 },
    { name: "Bola Set", price: 1200000 },
  ];

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item.name + " ditambahkan ke keranjang!");
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#fef3c7" }}>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          🎱 Maha Billiard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
              <p className="text-gray-600">Rp{item.price.toLocaleString("id-ID")}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Tambah ke Keranjang
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/keranjang">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              🛒 Lihat Keranjang
            </button>
          </Link>
          <Link href="/admin">
            <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800">
              🔑 Admin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
