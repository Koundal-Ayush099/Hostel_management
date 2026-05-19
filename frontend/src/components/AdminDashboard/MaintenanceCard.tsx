import { Wrench } from "lucide-react";

const MaintenanceCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="uppercase text-sm tracking-wider text-gray-500">
          Maintenance
        </h3>

        <Wrench className="text-red-500" />
      </div>

      <div className="mt-6">
        <div className="flex items-end gap-2">
          <h1 className="text-5xl font-bold text-red-600">
            12
          </h1>

          <span className="text-gray-500 mb-2">
            Pending
          </span>
        </div>

        <p className="text-gray-500 mt-3">
          4 urgent requests require immediate attention.
        </p>

        <button className="w-full mt-6 bg-red-100 hover:bg-red-200 text-red-600 py-3 rounded-xl transition">
          View Requests
        </button>
      </div>
    </div>
  );
};

export default MaintenanceCard;