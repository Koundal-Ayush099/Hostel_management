const blocks = [
  {
    name: "Block A",
    rooms: 42,
    active: true,
  },
  {
    name: "Block B",
    rooms: 38,
  },
  {
    name: "Block C",
    rooms: 44,
  },
];

const BlockFilter = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h3 className="uppercase tracking-wider text-sm text-gray-500">
        Filter By Block
      </h3>

      <div className="space-y-3 mt-6">
        {blocks.map((block) => (
          <button
            key={block.name}
            className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition ${
              block.active
                ? "bg-blue-50 text-blue-700"
                : "hover:bg-gray-100"
            }`}
          >
            <span className="font-medium">
              {block.name}
            </span>

            <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
              {block.rooms} Rooms
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlockFilter;