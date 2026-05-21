import { Plus, Search } from "lucide-react";

const RoomHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Room Allocation
        </h1>

        <p className="text-gray-500 mt-1">
          Manage and monitor block occupancy in real-time.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* SEARCH */}
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 h-12 w-[320px]">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search room or student..."
            className="outline-none flex-1 bg-transparent"
          />
        </div>

        {/* BUTTON */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 h-12 rounded-xl flex items-center gap-2 transition">
          <Plus size={18} />

          New Booking
        </button>
      </div>
    </div>
  );
};

export default RoomHeader;