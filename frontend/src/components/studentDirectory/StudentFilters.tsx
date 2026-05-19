import { Search } from "lucide-react";

const tabs = ["Current", "Alumni", "Pending"];

const StudentFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      {/* SEARCH */}
      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 h-12 w-full lg:w-130">
        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search by name, room, or ID..."
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      {/* TABS */}
      <div className="bg-white border border-gray-200 rounded-xl p-1 flex items-center gap-1 w-fit">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-lg transition ${
              index === 0
                ? "bg-blue-700 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudentFilters;