"use client";

import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-gray-100">
      
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Hero />

      <ProductGrid search={search} />

    </main>
  );
}