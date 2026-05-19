import { BedDouble } from "lucide-react";

const OccupancyCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Total Occupancy
          </p>

          <h2 className="text-6xl font-bold text-blue-700 mt-3">
            85%
          </h2>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
          <BedDouble className="text-blue-600" />
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-8">
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-[85%] h-full bg-blue-700 rounded-full"></div>
        </div>

        <div className="flex items-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-700"></div>

            <span className="text-gray-600">
              340 Occupied
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

            <span className="text-gray-600">
              60 Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyCard;