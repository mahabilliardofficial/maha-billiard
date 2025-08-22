
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Maha Billiard</h1>
      <p>Selamat Datang di Maha Billiard</p>
      <nav style={{ display: 'flex', gap: 10 }}>
        <Link href="/produk">Produk</Link>
        <Link href="/keranjang">Keranjang</Link>
        <Link href="/service">Service</Link>
        <Link href="/kontak">Kontak</Link>
      </nav>
    </div>
  );
}
