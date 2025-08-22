import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem("cart");
      setCartCount(savedCart ? JSON.parse(savedCart).length : 0);
    };

    // Load awal
    updateCartCount();

    // Update kalau ada perubahan
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <Link href="/" className="text-xl font-bold">
        Maha Billiard
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/produk" className="hover:text-gray-300">
          Produk
        </Link>
        <Link href="/keranjang" className="relative hover:text-gray-300">
          Keranjang 🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
        <Link href="/kontak" className="hover:text-gray-300">
          Kontak
        </Link>
      </div>
    </nav>
  );
}

