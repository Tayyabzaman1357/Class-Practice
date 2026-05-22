"use client";

import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        
        <div className="flex items-center justify-between gap-4">

          {/* LOGO */}

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-emerald-600 p-2 rounded-xl">
              <ShoppingBag className="text-white" size={22} />
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900">
              OLX <span className="text-emerald-600">PRO</span>
            </h1>
          </div>

          {/* SEARCH */}

          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="flex items-center w-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 focus-within:border-emerald-500">
              
              <div className="px-4 text-gray-400">
                <Search size={20} />
              </div>

              <input
                type="text"
                placeholder="Search products, cars, mobiles..."
                className="w-full bg-transparent px-2 py-3 outline-none text-gray-700 placeholder:text-gray-400"
              />

              <button className="bg-emerald-600 hover:bg-emerald-700 transition px-6 py-3 text-white font-medium">
                Search
              </button>
            </div>
          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-3">

            <button className="hidden md:flex items-center gap-2 border border-gray-300 hover:border-emerald-500 px-4 py-2 rounded-xl transition">
              <User size={18} />
              <span className="font-medium text-gray-700">
                Login
              </span>
            </button>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg shadow-emerald-200 transition">
              + Sell Now
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}