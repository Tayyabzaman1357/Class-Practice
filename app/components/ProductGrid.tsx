"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
};

type ProductGridProps = {
  search: string;
};

export default function ProductGrid({
  search,
}: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // FETCH PRODUCTS

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products?limit=40"
        );

        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // SEARCH FILTER

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">

      {/* LOADING */}

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl h-[320px] animate-pulse"
            />
          ))}
        </div>
      ) : (
        <>
          {/* PRODUCTS COUNT */}

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Fresh Recommendations
            </h2>

            <p className="text-gray-500">
              {filteredProducts.length} Products
            </p>
          </div>

          {/* PRODUCTS GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.thumbnail}
                category={product.category}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}