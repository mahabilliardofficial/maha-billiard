import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: "#fefcf7", minHeight: "100vh" }}>
      <Component {...pageProps} />
    </div>
  );
}
