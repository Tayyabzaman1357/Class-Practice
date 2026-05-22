"use client";

import Link from "next/link";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
}: Props) {
  return (
    <Link href={`/product/${id}`}>
      <div className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
        
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-60 w-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">

          <span className="inline-block text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full capitalize">
            {category}
          </span>

          <h2 className="mt-4 text-lg font-bold text-gray-800 line-clamp-1">
            {title}
          </h2>

          <div className="mt-4 flex items-center justify-between">
            
            <p className="text-2xl font-extrabold text-emerald-600">
              ${price}
            </p>

            <button className="bg-gray-900 text-white px-4 py-2 rounded-xl">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}