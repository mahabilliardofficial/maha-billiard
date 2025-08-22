import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100 text-center">
      <div className="p-10 rounded-xl bg-white shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Maha Billiard 🎱</h1>
        <p className="mt-2 text-gray-600">
          Tempat terbaik untuk meja & perlengkapan billiard premium
        </p>
        <Link
          href="/produk"
          className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700"
        >
          Lihat Produk
        </Link>
      </div>
    </div>
  );
}
