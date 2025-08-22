import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <div className="w-full h-[400px] bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Maha Billiard 🎱</h1>
        <p className="mt-2 text-lg text-gray-600">Tempat terbaik untuk meja & perlengkapan billiard premium</p>
        <Link
          href="/produk"
          className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 shadow-lg"
        >
          🎱 Lihat Produk
        </Link>
      </div>
    </div>
  );
}
