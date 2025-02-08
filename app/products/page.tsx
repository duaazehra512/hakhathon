"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import  {Product}  from "@/types/productss";

const sanity = sanityClient({
  projectId: "ddnwsmte",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});


const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [clickedProductId, setClickedProductId] = useState<string | null>(null);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "products"] {
        _id,
        title,
        _type,
        price,
        description,
        priceWithoutDiscount,
        "imageUrl": image.asset->url,
          "slug": slug.current
      
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setClickedProductId(product._id);

    setTimeout(() => {
      // Get the current cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Check if the product is already in the cart
      const existingItem = existingCart.find((item: Product) => item._id === product._id);
      if (existingItem) {
        // If product already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Add product to cart if it's not already there
        existingCart.push({ ...product, quantity: 1 });
      }

      // Update the local storage with the new cart data
      localStorage.setItem("cart", JSON.stringify(existingCart));

      // Update the cart state to trigger a re-render
      setCart(existingCart);

      // Dispatch an event to notify the Navbar about cart update
      window.dispatchEvent(new Event("cartUpdated"));

      setClickedProductId(null);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      {/* Products Header */}
      <h2 className="text-center text-slate-800 mt-4 mb-4">Our Latest Products</h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >

            {/* <Link href={`/product/${product.slug.current}`}> */}
            <Link href={`/singleproduct/${product?.slug ?? ''}`}>

            <div className="aspect-square w-full">
  <Image
    src={product.imageUrl || "/placeholder.jpg"}
    alt={product.title}
    width={300}
    height={300}
    className="w-full h-full object-contain rounded-md"
  />
</div>


             </Link>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {product.description.slice(0, 100)}...
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800">${product.price}</p>
                  {product.priceWithoutDiscount > product.price && (
                    <p className="text-sm text-green-600">
                      <span className="line-through text-gray-500">
                        ${product.priceWithoutDiscount}
                      </span>
                      <span className="ml-2 text-green-600">
                        (You save ${product.priceWithoutDiscount - product.price})
                      </span>
                    </p>
                      
                  )} 
                </div>  
                <motion.button
                  onClick={() => addToCart(product)}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                  animate={{
                    backgroundColor:
                      clickedProductId === product._id
                        ? ["#38bdf8", "#14b8a6", "#0f766e"]
                        : "#14b8a6",
                  }}
                  className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-2 rounded-md shadow-md hover:from-teal-500 hover:to-teal-700 transform transition-transform duration-300"
                >
                  {clickedProductId === product._id ? "Adding..." : "Add to Cart"}
                </motion.button>
              
              </div>
              
            </div>
            {/* </Link> */}
          </div>
        ))} 
      </div>
    </div>
  );
};

export default ProductCards;








