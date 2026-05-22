import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <ProductGrid />
    </main>
  );
}