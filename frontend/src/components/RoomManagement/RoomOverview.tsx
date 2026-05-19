import RoomCard from "./RoomCard";

const rooms = [
  {
    room: "A - 101",
    students: ["James Wilson", "David Chen"],
    type: "DOUBLE BED",
    status: "OCCUPIED",
  },
  {
    room: "A - 102",
    students: [],
    type: "SINGLE BED",
    status: "VACANT",
  },
  {
    room: "A - 103",
    students: [],
    type: "DOUBLE BED",
    status: "MAINTENANCE",
  },
  {
    room: "A - 104",
    students: ["Sarah Miller"],
    type: "DOUBLE BED",
    status: "PARTIAL",
  },
];

const RoomOverview = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Block A Overview
        </h2>

        <div className="flex items-center gap-3">
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Vacant
          </div>

          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Occupied
          </div>

          <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            Maintenance
          </div>
        </div>
      </div>

      {/* ROOMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
        {rooms.map((room) => (
          <RoomCard
            key={room.room}
            room={room.room}
            students={room.students}
            type={room.type}
            status={room.status}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomOverview;