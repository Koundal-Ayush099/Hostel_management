import {
  Building2,
  Hammer,
  Clock3,
} from "lucide-react";

const EmergencyCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      {/* TOP */}
      <div className="flex items-start justify-between">
        <p className="text-red-600 text-xs font-semibold">
          EMERGENCY
        </p>

        <div className="flex items-center gap-4">
          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
            Open
          </span>

          <button className="text-blue-700 hover:underline">
            View Details
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <h2 className="text-4xl font-bold mt-4">
        Broken Window Lock
      </h2>

      <p className="text-gray-500 mt-5 leading-relaxed">
        The window lock in Room 301 is completely detached.
        This is a security risk for the residents.
        Immediate attention required.
      </p>

      {/* FOOTER */}
      <div className="flex flex-wrap gap-8 mt-8 text-gray-600">
        <div className="flex items-center gap-2">
          <Building2 size={18} />

          Room 301
        </div>

        <div className="flex items-center gap-2">
          <Hammer size={18} />

          Carpentry
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={18} />

          Reported 4h ago
        </div>
      </div>
    </div>
  );
};

export default EmergencyCard;