import { UserPlus, LogIn } from "lucide-react";

const DashboardHeader = () => {

  const currentHour =
    new Date().getHours();

  let greeting = "Morning";

  if (
    currentHour >= 12 &&
    currentHour < 17
  ) {
    greeting = "Afternoon";
  } else if (currentHour >= 17) {
    greeting = "Evening";
  }

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Good {greeting}, Admin
        </h1>

        <p className="text-gray-500 mt-1">
          Here's what's happening at the hostel today.
        </p>
      </div>

      <div className="flex items-center gap-3">

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition">
          <UserPlus size={18} />

          Add Student
        </button>

        <button className="border border-gray-300 bg-white hover:bg-gray-100 px-5 py-3 rounded-xl flex items-center gap-2 transition">
          <LogIn size={18} />

          Check-in
        </button>

      </div>
    </div>
  );
};

export default DashboardHeader;