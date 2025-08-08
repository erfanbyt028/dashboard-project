import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoWalletSharp, IoDocumentTextSharp } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";
import { FaUser, FaMousePointer, FaShoppingCart, FaBox } from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import Header from "../components/Header";
import cardImg1 from "../../public/assets/dashboard images/cardImg1.png";
import cardImg2 from "../../public/assets/dashboard images/cardImg2.jpg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// ✅ Fixed StatCard so IconComp is properly used
const StatCard = ({ title, value, change, IconComp, color }) => {
  return (
    <div className="flex items-center justify-between w-full sm:w-[250px] bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-lg font-semibold text-gray-800">
          {value}{" "}
          <span
            className={`text-sm ${
              change.includes("-") ? "text-red-500" : "text-green-500"
            }`}
          >
            {change}
          </span>
        </p>
      </div>
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <IconComp className="text-white text-lg" />
      </div>
    </div>
  );
};

const DashboardScreen = () => {
  // Top stats
  const topStats = [
    {
      title: "Today’s Money",
      value: "$53,000",
      change: "+55%",
      IconComp: IoWalletSharp,
      color: "#4fd1c5",
    },
    {
      title: "Today’s Users",
      value: "2,300",
      change: "+5%",
      IconComp: CiGlobe,
      color: "#4fd1c5",
    },
    {
      title: "New Clients",
      value: "+3,052",
      change: "-14%",
      IconComp: IoDocumentTextSharp,
      color: "#e53e3e",
    },
    {
      title: "Total Sales",
      value: "$173,000",
      change: "+8%",
      IconComp: GiShoppingCart,
      color: "#4fd1c5",
    },
  ];

  // Active users stats
  const userStats = [
    { icon: FaUser, label: "Users", value: "32,984" },
    { icon: FaMousePointer, label: "Clicks", value: "2.42m" },
    { icon: FaShoppingCart, label: "Sales", value: "2,400$" },
    { icon: FaBox, label: "Items", value: "320" },
  ];

  // Bar chart (Active Users)
  const barData = {
  labels: ["", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      data: [320, 230, 120, 300, 500, 420, 480, 300, 200, 100],
      backgroundColor: "#ffffff",
      borderRadius: 50,
      barThickness: 6,
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { display: false },
    },
    y: {
      grid: {
        color: "rgba(255,255,255,0.15)", // خطوط ملایم سفید
        drawTicks: false,
      },
      ticks: {
        color: "#fff", // رنگ متن درجه‌بندی
        font: { size: 12 },
        stepSize: 100, // فاصله بین درجه‌ها
        padding: 8,
      },
      min: 0,
      max: 500,
    },
  },
};


  // Line chart (Sales Overview)
  const lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [200, 300, 450, 400, 600, 500, 700, 650, 500, 550, 400, 450],
        fill: true,
        backgroundColor: "rgba(0, 210, 190, 0.2)",
        borderColor: "#00d2be",
        tension: 0.4,
      },
      {
        label: "Revenue",
        data: [300, 200, 350, 300, 400, 350, 500, 450, 400, 420, 350, 300],
        fill: true,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderColor: "#1a1a1a",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { drawBorder: false } },
    },
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl min-h-screen">
      {/* Header */}
      <Header />

      {/* Stats Cards */}
      <div className="w-full flex flex-col sm:flex-row flex-wrap justify-between gap-5 mt-10">
        {topStats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Two Big Cards */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Left Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-500">Built by developers</p>
            <h2 className="text-lg font-semibold text-gray-800">
              Purity UI Dashboard
            </h2>
            <p className="text-xs text-gray-500 mt-1 pr-10">
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </p>
            <div>
              <button className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline">
                Read more <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src={cardImg1}
              alt="Purity UI Illustration"
              className="w-32 sm:w-56 h-auto"
            />
          </div>
        </div>

        {/* Right Card */}
        <div
          className="flex-1 rounded-2xl shadow-lg p-6 flex flex-col justify-between bg-cover bg-center min-h-[200px]"
          style={{ backgroundImage: `url(${cardImg2})` }}
        >
          <div>
            <h2 className="text-lg font-semibold text-white">
              Work with the Rockets
            </h2>
            <p className="max-w-9/12 text-xs text-gray-200 mt-1">
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who takes the opportunity first.
            </p>
          </div>
          <button className="mt-4 flex items-center gap-2 text-sm font-medium text-white hover:underline">
            Read more <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Middle Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {/* Active Users Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Chart */}
          {/* Chart */}
          <div className="bg-gradient-to-r from-[#1e2146] to-[#0e1228] p-4 h-40 flex items-center">
            <div className="w-full h-full">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>

          {/* Stats */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Active Users
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-green-500 font-semibold">(+23)</span> than
              last week
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
              {userStats.map((s, i) => (
                <div key={i} className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <s.icon className="text-teal-500 text-base" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {s.label}
                    </span>
                  </div>
                  <span className="text-lg font-semibold mt-1">{s.value}</span>
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-gray-200 rounded-full mt-1">
                    <div
                      className="h-full bg-teal-500 rounded-full"
                      style={{
                        width:
                          i === 0
                            ? "80%"
                            : i === 1
                            ? "75%"
                            : i === 2
                            ? "60%"
                            : "70%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sales Overview Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Sales overview
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            <span className="text-green-500 font-semibold">(+5%)</span> more in
            2021
          </p>
          <div className="mt-6 h-64">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
