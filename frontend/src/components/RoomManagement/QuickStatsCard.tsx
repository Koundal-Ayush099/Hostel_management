type Room = {
  id: number;
  status: string;
};

type Props = {
  rooms: Room[];
};

const QuickStatsCard = ({
  rooms,
}: Props) => {

  const totalRooms =
    rooms.length;

  const occupiedRooms =
    rooms.filter(
      (room) =>
        room.status === "OCCUPIED"
    ).length;

  const vacantRooms =
    rooms.filter(
      (room) =>
        room.status === "VACANT"
    ).length;

  const occupancyRate =
    totalRooms > 0
      ? (
          (occupiedRooms /
            totalRooms) *
          100
        ).toFixed(0)
      : 0;

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
          {totalRooms}
        </span>

      </div>

      {/* PROGRESS */}
      <div className="mt-6">

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

          <div
            className="h-full bg-blue-700 transition-all duration-500"
            style={{
              width: `${occupancyRate}%`,
            }}
          />

        </div>

        <div className="flex justify-between mt-4">

          <div>
            <p className="text-gray-400 text-sm">
              Occupied
            </p>

            <h4 className="text-blue-700 text-2xl font-bold">
              {occupiedRooms}
            </h4>
          </div>

          <div>
            <p className="text-gray-400 text-sm">
              Vacant
            </p>

            <h4 className="text-green-600 text-2xl font-bold">
              {vacantRooms}
            </h4>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuickStatsCard;