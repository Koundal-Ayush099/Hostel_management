import { PlusCircle } from "lucide-react";

const MaintenanceHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-4xl font-bold">
          Requests
        </h1>

        <p className="text-gray-500 mt-1">
          Manage and track facility maintenance tasks
        </p>
      </div>

      <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 h-12 rounded-xl flex items-center gap-2 transition">
        <PlusCircle size={18} />

        Add New Request
      </button>
    </div>
  );
};

export default MaintenanceHeader;