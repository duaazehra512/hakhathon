import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
export default function Contact() {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 mt-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Get In Touch With Us
      </h1>
      <p className="text-center text-gray-500 mb-8">
        For more information about our products & services, please feel free to
        drop us <br />an email. Our staff will always be there to help you out. Do not
        hesitate!
      </p>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl mt-16 ml-60 mr-32">
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 mt-8">
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-xl text-black" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p>236 5th SE Avenue, New <br /> York NY10000, United <br />States</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaPhoneAlt className="text-xl text-black" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>Mobile: (+84) 546-6789</p>
                <p>Hotline: (+84) 456-8769</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaClock className="text-xl text-black" />
              <div>
                <h3 className="font-bold">Working Time</h3>
                <p>Monday–Friday: 9:00 – 22:00</p>
                <p>Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-white rounded-lg p-6 mt-3">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2 ">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                type="text"
                placeholder="This is optional"
                className="w-full border rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                placeholder="Write your message here"
                className="w-full border rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-teal-500 h-24"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-48 bg-[#029FAE] text-white rounded px-4 py-2 font-bold hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" w-4/5 h-40 bg-gray-100 flex flex-col md:flex-row justify-around items-center mt-12  text-center">
        <div className="flex items-center space-x-2 space-y-4 mb-4 md:mb-0">
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 w-full text-center md:space-x-8 ">
  <div className="flex flex-col items-center mb-4 md:mb-0">
    <div className="text-black text-3xl mb-2"><HiOutlineTrophy size={40}/> </div>
    <p className="text-gray-700 break-words">
    <h3 className="font-bold text-gray-900">  High Quality</h3> 
      crafted from top materials
    </p>
  </div>
  <div className="flex flex-col items-center mb-4 md:mb-0">
    <div className="text-black text-3xl mb-2"><FaRegCheckCircle size={35} /></div>
    <p className="text-gray-700 break-words">
    <h3 className="font-bold text-gray-900"> Warranty Protection </h3>
      over 2 years
    </p>
  </div>
  <div className="flex flex-col items-center">
    <div className="text-back text-3xl mb-2"><BiSupport size={40}/></div>
    <p className="text-gray-700 break-words">
     <h3 className="font-bold text-gray-900">24 / 7 Support </h3>
      Dedicated support
    </p>
  </div>
</div>

      </div> </div>
    </div>
  );
}