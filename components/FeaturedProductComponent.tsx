

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export default function FeaturedProductComponent() {
  const products = [
    { image: "chair.png", name: "Library Stool Chair", price: "$20", text: "New" },
    { image: "chair2.png", name: "Library Stool Chair", price: "$20", oldPrice: "$30", text: "Sales" },
    { image: "chair3.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair4.png", name: "Library Stool Chair", price: "$20" },
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            className="border-none shadow-none w-full sm:w-[22rem] bg-white"
          >
            <CardContent>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
                {product.text && (
                  <span
                    className={`absolute top-2 left-2 ${
                      product.text === "New"
                        ? "bg-green-600"
                        : product.text === "Sales"
                        ? "bg-orange-500"
                        : ""
                    } text-white text-xs font-bold px-2 py-0.5 rounded`}
                  >
                    {product.text}
                  </span>
                )}
              </div>
            </CardContent>

            <CardFooter>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-xl text-gray-800 hover:text-teal-600">
                    {product.name}
                  </div>
                  <button
                    className="bg-gray-300 hover:bg-teal-300 p-2 rounded-md"
                    aria-label="Add to Cart"
                  >
                    <ShoppingCart className="text-gray-800" />
                  </button>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  {index === 1 && (
                    <div className="text-gray-500 text-sm line-through">
                      {product.oldPrice}
                    </div>
                  )}
                  <div className="text-lg font-bold text-gray-800">{product.price}</div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
