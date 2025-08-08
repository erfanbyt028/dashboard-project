import React from 'react'
import { FaUser, FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm">
                  <span className="text-gray-400">Pages</span>{" "}
                  <span className="text-gray-600">/ Dashboard</span>
                </p>
                <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
              </div>
      
              <div className="flex items-center gap-4">
                <input
                  className="w-40 sm:w-48 h-9 rounded-lg bg-blue-50 px-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  placeholder="Type here..."
                />
                <button className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg hover:bg-gray-100 transition">
                  <FaUser className="text-gray-600" />
                  <span className="text-gray-700">Sign In</span>
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                  <IoMdSettings className="text-gray-600 text-lg" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition relative">
                  <FaBell className="text-gray-600 text-lg" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>
    </div>
  )
}

export default Header
