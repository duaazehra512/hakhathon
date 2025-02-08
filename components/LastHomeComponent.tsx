




import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function LastHome() {
  const products = [
    { image: "chair.png", name: "Library Stool Chair", price: "$20", text: "New" },
    { image: "chair2.png", name: "Library Stool Chair", price: "$20", text: "Sales" },
    { image: "chair3.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair4.png", name: "Library Stool Chair", price: "$20" },
  ];

  const otherProducts = [
    { image: "sec.png.png", name: "Library Stool Chair", price: "$20", text: "New" },
    { image: "card.png", name: "Library Stool Chair", price: "$20", text: "Sales" },
    { image: "image.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair.png", name: "Library Stool Chair", price: "$20" },
  ];

  return (
    <div className='mt-8'>
      {/* Main Products Section */}
      <div className='flex flex-wrap gap-4 mt-5'>
        {products.map((product, index) => (
          <Card key={index} className="border-none shadow-none w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
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
              <div className="flex flex-col items-start">
                <div className="text-xl text-black hover:text-teal-700">
                  {product.name}
                  <button className="btn btn-primary mt-2">
                    <ShoppingCart className="mr-2 ml-11 bg-gray-300 rounded-[4px] hover:bg-teal-700" />
                  </button>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="text-xl font-bold mt-2">{product.price}</div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Other Products Section */}
      <div className='flex flex-wrap gap-4 mt-8'>
        {otherProducts.map((otherProduct, index) => (
          <Card key={index} className='border-none shadow-none w-full sm:w-1/2 md:w-1/4 lg:w-1/5'>
            <CardContent>
              <div className="relative">
                <img 
                  src={otherProduct.image} 
                  alt={otherProduct.name} 
                  className="w-full h-auto object-cover"
                />
                {otherProduct.text && (
                  <span
                    className={`absolute top-2 left-2 ${
                      otherProduct.text === "New"
                        ? "bg-green-600"
                        : otherProduct.text === "Sales"
                        ? "bg-orange-500"
                        : ""
                    } text-white text-xs font-bold px-2 py-0.5 rounded`}
                  >
                    {otherProduct.text}
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col items-start">
                <div className="text-xl text-black hover:text-teal-700">
                  {otherProduct.name}
                  <button className="btn btn-primary mt-2">
                    <ShoppingCart className="mr-2 ml-11 bg-gray-300 rounded-[4px] hover:bg-teal-700" />
                  </button>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="text-xl font-bold mt-2">{otherProduct.price}</div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
