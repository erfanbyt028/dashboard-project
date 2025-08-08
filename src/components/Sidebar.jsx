import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaTable,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa';
import { MdDashboardCustomize, MdOutlineReceiptLong } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="w-[200px] h-screen bg-[#F8F9FA] p-5 flex flex-col justify-between">
      <div>
        {/* Top Logo */}
        <div className="flex items-center gap-2 mb-6 border-b pb-4">
          <MdDashboardCustomize className="text-xl text-gray-700" />
          <h1 className="text-sm font-bold text-gray-700 uppercase">Purity UI Dashboard</h1>
        </div>

        {/* Main Nav */}
        <nav className="space-y-2">
          <SidebarItem to="/" icon={<FaHome />} label="Dashboard" />
          <SidebarItem to="/tables" icon={<FaTable />} label="Tables" />
          <SidebarItem to="/billing" icon={<MdOutlineReceiptLong />} label="Billing" />
          <SidebarItem to="/rtl" icon={<FiSettings />} label="RTL" />
        </nav>

        {/* Account Section */}
        <p className="text-xs font-bold text-gray-400 uppercase mt-6 mb-2">Account Pages</p>
        <nav className="space-y-2">
          <SidebarItem to="/profile" icon={<FaUser />} label="Profile" />
          <SidebarItem to="/signin" icon={<FaSignInAlt />} label="Sign In" />
          <SidebarItem to="/signup" icon={<FaUserPlus />} label="Sign Up" />
        </nav>
      </div>

      {/* Bottom Help Box */}
      <div className="bg-[#4fd1c5] rounded-xl p-4 text-white text-sm mt-8">
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-[#4fd1c5] mb-2">
          ?
        </div>
        <p className="font-semibold">Need help?</p>
        <p className="text-xs mb-3">Please check our docs</p>
        <button className="bg-white text-[#4fd1c5] w-full py-1 rounded-lg text-xs font-semibold">
          DOCUMENTATION
        </button>
      </div>
    </aside>
  );
};

const SidebarItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium transition ${
          isActive
            ? 'bg-white shadow text-gray-700'
            : 'text-gray-500 hover:bg-white hover:text-gray-700'
        }`
      }
    >
      <div className="bg-gray-100 p-2 rounded-xl text-[#4fd1c5] text-lg">{icon}</div>
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;
