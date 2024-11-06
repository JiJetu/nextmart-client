"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          NextMart
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/orders">Orders</Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-700 text-white p-4 space-y-4">
          <Link href="/home" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/products" onClick={toggleMenu}>
            Products
          </Link>
          <Link href="/cart" onClick={toggleMenu}>
            Cart
          </Link>
          <Link href="/orders" onClick={toggleMenu}>
            Orders
          </Link>
          <Link href="/dashboard" onClick={toggleMenu}>
            Dashboard
          </Link>
          <Link href="/login" onClick={toggleMenu}>
            Login
          </Link>
          <Link href="/register" onClick={toggleMenu}>
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
