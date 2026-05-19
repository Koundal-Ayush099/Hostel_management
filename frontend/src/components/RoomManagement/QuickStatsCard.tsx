const QuickStatsCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h3 className="uppercase tracking-wider text-sm text-gray-500">
        Quick Stats
      </h3>

      <div className="flex items-center justify-between mt-6">
        <span className="text-gray-600">
          Total Rooms
        </span>

        <span className="text-3xl font-bold">
          124
        </span>
      </div>

      {/* PROGRESS */}
      <div className="mt-6">
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-[75%] h-full bg-blue-700"></div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <p className="text-gray-400 text-sm">
              Occupied
            </p>

            <h4 className="text-blue-700 text-2xl font-bold">
              92
            </h4>
          </div>

          <div>
            <p className="text-gray-400 text-sm">
              Vacant
            </p>

            <h4 className="text-green-600 text-2xl font-bold">
              24
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatsCard;