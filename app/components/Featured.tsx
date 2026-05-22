"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/api";

type Props = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    thumbnail: string
  };

export default function Featured() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.slice(0, 8));
    };

    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product: Props) => (
          <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.thumbnail} id={0} category={""}          />
        ))}
      </div>
    </section>
  );
}