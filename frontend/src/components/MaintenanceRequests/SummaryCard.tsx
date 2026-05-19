const SummaryCard = () => {
  return (
    <div className="bg-blue-700 text-white rounded-3xl p-6 shadow-sm">
      <p className="uppercase tracking-wider text-sm text-blue-100">
        Maintenance Summary
      </p>

      <div className="space-y-6 mt-8">
        <div className="flex items-center justify-between">
          <span>Active Requests</span>

          <span className="text-2xl font-bold">
            12
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span>Average Response</span>

          <span className="text-2xl font-bold">
            1.5h
          </span>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="mt-10">
        <div className="w-full h-3 bg-blue-900 rounded-full overflow-hidden">
          <div className="w-[65%] h-full bg-white rounded-full"></div>
        </div>

        <p className="mt-4 text-blue-100">
          65% targets met this week
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;