import { FaShippingFast, FaTags } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { TbPlant } from "react-icons/tb";
export default function Home() {
  return (
    <div className="font-sans">
      {/* About Section */}
      <section className="flex flex-wrap justify-center items-center bg-white text-white py-12 px-6 md:px-12 gap-4">
        {/* Text Box */}
        <div className="flex items-center justify-center w-96 h-64 bg-teal-700 rounded-lg shadow-lg text-center p-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Us - Comforty</h2>
            <p className="text-sm mb-4 text-white">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <button className="bg-teal-600 text-white px-4 py-2 font-medium rounded-md">
              View collection
            </button>
          </div>
        </div>
        {/* Image Box */}
        <div className="w-96 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
          <img
            src="/chair.png" // Replace with your image path
            alt="Chair"
            className="w-48 h-48 object-contain"
          />
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 text-center">
        <h3 className="text-2xl font-semibold mb-8">
          What Makes Our Brand Different
        </h3>
        <div className="flex justify-center text gap-6 text-teal-600">
          <div className="flex-1 text-pretty p-4 max-w-[200px] bg-gray-100">
            <FaShippingFast className="text-teal-800 text-4xl mx-auto mb-4" />
            <h4 className="font-medium text-lg">Next day as standard</h4>
            <p>Order before 3pm and get your order the next day as standard!</p>
          </div>
          <div className="flex-1 text-pretty bg-gray-100 p-4 max-w-[200px]">
            <CiCircleCheck className="text-teal-800 text-4xl mx-auto mb-4" />
            <h4 className="font-medium text-lg">Made by true artisans</h4>
            <p>
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="flex-1 text-pretty bg-gray-100 p-4 max-w-[200px]">
            <FaTags className="text-teal-800 text-4xl mx-auto mb-4" />
            <h4 className="font-medium text-lg">Unbeatable prices</h4>
            <p>
              For our materials and quality, you won not find better prices
              anywhere.
            </p>
          </div>
          <div className="flex-1 text-pretty bg-gray-100 p-4 max-w-[200px]">
            <TbPlant className="text-teal-800 text-4xl mx-auto mb-4" />
            <h4 className="font-medium text-lg">Recycled packaging</h4>
            <p>
              We use 100% recycled to ensure our footprint is more manageable.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-12 px-6 md:px-12">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Our Popular Products
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-96 h-72 text-center">
            <img
              src="/Large.jpg"
              alt="Poplar suede sofa"
              className="rounded-lg shadow-lg mb-4"
            />
            <h4 className="font-medium text-lg">The Poplar suede sofa</h4>
            <p>$99.00</p>
          </div>
          <div className="w-52 h-36 text-center">
            <img
              src="/about.png"
              alt="The Dandy chair"
              className="rounded-lg shadow-lg mb-4"
            />
            <h4 className="font-medium text-lg">The Dandy chair</h4>
            <p>$99.00</p>
          </div>
          <div className="w-52 h-36 text-center">
            <img
              src="/about2.png"
              alt="The Dandy chair"
              className="rounded-lg shadow-lg mb-4"
            />
            <h4 className="font-medium text-lg">The Dandy chair</h4>
            <p>$99.00</p>
          </div>
        </div>
      </section>
    </div>
  );
}
