
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center p-10">
      <Image
        src="/banner.jpg"
        alt="Maha Billiard"
        width={800}
        height={400}
        className="mx-auto rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-6">Selamat Datang di Maha Billiard</h1>
      <p className="mt-2 text-gray-600">Tempat terbaik untuk peralatan billiard premium</p>

      <Link
        href="/produk"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Lihat Produk 🎱
      </Link>
    </div>
  );
}
