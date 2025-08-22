import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <div className="relative w-full h-[400px]">
        <Image
          src="/banner.jpg"
          alt="Maha Billiard"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold drop-shadow-lg">Selamat Datang di Maha Billiard</h1>
          <p className="mt-2 text-lg">Tempat terbaik untuk meja & perlengkapan billiard premium</p>
          <Link
            href="/produk"
            className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 shadow-lg"
          >
            🎱 Lihat Produk
          </Link>
        </div>
      </div>
    </div>
  );
}
