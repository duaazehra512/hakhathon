"use client";

import { client } from "@/sanity/lib/client";
import { Product } from "@/types/productss";
import { groq } from "next-sanity";
import Image from "next/image";




interface ProductPageProps {
    params: { slug: string };
  }
  

async function getProduct (slug : string): Promise<Product > {
    return client.fetch(
        groq`*[_type == "products" && slug.current == $slug][0]{
         _id,
        title,
        _type,
        price,
        description,
        priceWithoutDiscount,
        "imageUrl": image.asset->url
        
        
        }` , {slug}
    )
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = params; 
    const product = await getProduct(slug);
  
    return (
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square">
            {product?.imageUrl && (
            //   <Image
            //     src={product.imageUrl || "/placeholder.jpg"}
            //     alt={product.title}
            //     width={300}
            //     height={300}
            //     className="w-full h-48 object-cover rounded-md"
            //   />

<Image
    src={product.imageUrl || "/placeholder.jpg"}
    alt={product.title}
    width={300}
    height={300}
    className="w-full h-full object-contain rounded-md"
  />

            )}
          </div>
          {/* <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold ">{product.title}</h1>
            <p className ="text-2xl font-sans w-52 h-14 items-center gap-2 bg-teal-700 text-white font-bold py-1 px-3 rounded-lg hover:bg-teal-950 transition inline-flex">
               ${product.price}.00 USD </p>
               <div className="w-full h-1 bg-gray-200 shadow-sm shadow-gray-300">

               </div>
{product.description}
          </div> */}
       
       
       
       
       
       

       
       
        </div>
      </div>
    );
  }
