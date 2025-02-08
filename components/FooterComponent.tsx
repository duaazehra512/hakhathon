

import { FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white mt-12 px-6 md:px-16 lg:px-32 py-8 border-t">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-y-12 gap-x-4">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Comforty Logo" className="w-10 h-10" />
              <h2 className="text-xl font-semibold text-gray-700">Comforty</h2>
            </div>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Pinterest">
                <FaPinterest size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-gray-700 font-semibold mb-4">Category</h3>
            <ul className="space-y-2 text-gray-500">
              {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((category) => (
                <li key={category}>
                  <a href="#" className="hover:text-gray-800">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-gray-700 font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-500">
              {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((supportItem) => (
                <li key={supportItem}>
                  <a href="#" className="hover:text-gray-800">
                    {supportItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-gray-700 font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col sm:flex-row items-stretch space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-t-lg sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-b-lg sm:rounded-lg hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
