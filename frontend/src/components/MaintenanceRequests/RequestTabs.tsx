const tabs = [
  "All Tasks",
  "Pending",
  "In Progress",
  "Resolved",
];

const RequestTabs = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-5 py-2 rounded-full border transition ${
            index === 0
              ? "bg-blue-700 text-white border-blue-700"
              : "bg-white hover:bg-gray-100 border-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default RequestTabs;