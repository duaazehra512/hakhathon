"use client";

import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.reduce((total: number, item: any) => total + item.quantity, 0));
    };

    // Initial load
    updateCartCount();

    // Listen for cart updates from other components
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <div className="border-b-2 bg-gray-200">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 bg-[#272343] text-gray-200 md:px-56">
        <div className="text-sm">✓ Free Shipping On All Orders Over $50</div>
        <div className="flex items-center space-x-6 text-sm">
          <div>Eng</div>
          <a href="/faqs" className="hover:text-teal-600">FAQs</a>
          <div className="flex items-center space-x-1">
            <IoIosHelpCircleOutline size={16} />
            <a href="/contact" className="hover:text-teal-600">Need Help</a>
          </div>
        </div>
      </div>

      {/* Logo and Cart */}
      <div className="bg-gray-100 shadow-md border-b border-gray-200 px-4 py-3 md:px-56">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" />
            <span className="text-xl font-bold text-gray-700">Comforty</span>
          </div>

          {/* Cart */}
          <div className="relative hidden md:flex items-center">
            <a href="/cart" className="flex items-center space-x-2">
              <FiShoppingCart size={25} className="text-gray-700" />
              <span className="text-gray-700 font-medium">Cart</span>
              <span className="bg-teal-600 text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <FaBars
              size={20}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex bg-white px-4 py-5 md:px-56">
        <div className="container mx-auto flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-gray-900">
            <a href="/" className="hover:text-teal-600">Home</a>
            <a href="/products" className="hover:text-teal-600">Shop</a>
            <a href="/singleproduct" className="hover:text-teal-600">Product</a>
            <a href="/contact" className="hover:text-teal-600">Pages</a>
            <a href="/about" className="hover:text-teal-600">About</a>
          </div>

          {/* Contact Info */}
          <div className="text-gray-700">Contact: (808) 555-0111</div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          <a href="/" className="hover:text-teal-600">Home</a>
          <a href="/products" className="hover:text-teal-600">Shop</a>
          <a href="/singleproduct" className="hover:text-teal-600">Product</a>
          <a href="/contact" className="hover:text-teal-600">Pages</a>
          <a href="/about" className="hover:text-teal-600">About</a>
          <a href="/cart" className="hover:text-teal-600">Cart</a>
          <a href="/faqs" className="hover:text-teal-600">FAQ</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
