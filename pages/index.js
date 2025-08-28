import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#fef3c7" }}>
      <div className="max-w-2xl text-center bg-white shadow-xl p-10 rounded-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">🎱 Maha Billiard</h1>
        <p className="text-gray-600 mb-8">
          Selamat datang di Maha Billiard — solusi terbaik untuk meja, stick, aksesoris, dan service billiard Anda.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/produk" className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-900">
            Produk
          </Link>
          <Link href="/service" className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700">
            Service
          </Link>
          <Link href="/keranjang" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
            Keranjang
          </Link>
          <Link href="/kontak" className="bg-yellow-600 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-700">
            Kontak
          </Link>
        </div>
      </div>
    </div>
  );
}
