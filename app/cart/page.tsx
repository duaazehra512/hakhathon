"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl?: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load cart and wishlist data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart: CartItem[] = JSON.parse(savedCart).map((item: CartItem) => ({
        ...item,
        quantity: item.quantity ?? 1,
      }));
      setCartItems(parsedCart);
    }

    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Update cart in localStorage and notify navbar
  const updateCart = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    // Notify navbar to update the cart count instantly
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Add to Cart (from Product Page)
  const addToCart = (product: CartItem) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = existingCart.find((item: CartItem) => item._id === product._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Notify navbar to update the cart count instantly
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Increase quantity
  const increaseQuantity = (productId: string) => {
    const updatedCart = cartItems.map((item) =>
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  // Decrease quantity, but not below 1
  const decreaseQuantity = (productId: string) => {
    const updatedCart = cartItems.map((item) =>
      item._id === productId
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    updateCart(updatedCart);
  };

  // Delete product from cart
  const deleteProduct = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    updateCart(updatedCart);
  };

  // Toggle Wishlist (Add/Remove)
  const toggleWishlist = (productId: string) => {
    let updatedWishlist: string[];

    if (wishlist.includes(productId)) {
      updatedWishlist = wishlist.filter((id) => id !== productId);
    } else {
      updatedWishlist = [...wishlist, productId];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 gap-8">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                {/* Product Image */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={item.imageUrl || "/placeholder.jpg"}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow md:ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.description}</p>

                  {/* Price */}
                  <div className="text-sm text-gray-500 mt-1">
                    <p>Price: ${item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-3">
                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                    >
                      −
                    </button>
                    <span className="mx-3 text-lg font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Wishlist & Delete Buttons */}
                <div className="flex flex-col items-center space-y-2 ml-4">
                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(item._id)}
                    className="text-red-500 text-xl"
                  >
                    {wishlist.includes(item._id) ? <AiFillHeart /> : <AiOutlineHeart />}
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="text-gray-600 hover:text-red-600 text-2xl"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>

          {/* Itemized Product List */}
          <div className="space-y-2 mb-4">
            {cartItems.map((item, index) => (
              <div key={item._id} className="flex justify-between">
                <p className="text-gray-500">
                  {index + 1}. {item.title} <span className="font-semibold">x{item.quantity}</span>
                </p>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          {/* Total Calculation */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-semibold">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Estimated Delivery & Handling</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between text-lg font-semibold">
              <p>Total</p>
              <p>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>

          <button className="w-full mt-4 bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

