import { Wallet } from "lucide-react";

const FeesCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="uppercase text-sm tracking-wider text-gray-500">
          Upcoming Fees
        </h3>

        <Wallet className="text-blue-600" />
      </div>

      <div className="mt-8 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Next 7 Days
          </span>

          <span className="font-bold text-xl">
            ₹48,000
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Due Today
          </span>

          <span className="font-bold text-red-600 text-xl">
            ₹8,000
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-6">
        <button className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
          Payment Report
        </button>
      </div>
    </div>
  );
};

export default FeesCard;