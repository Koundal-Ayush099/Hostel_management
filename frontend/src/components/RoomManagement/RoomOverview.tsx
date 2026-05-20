import RoomCard from "./RoomCard";

type Room = {
  id: number;
  room_number: string;
  type: string;
  status: string;
  occupied_beds: number;
  capacity: number;
};

type Props = {
  rooms: Room[];
};

const RoomOverview = ({
  rooms,
}: Props) => {

  const formatRoomType = (
    type: string
  ) => {
    return `${type} BED`;
  };

  const generateStudents = (
    occupiedBeds: number
  ) => {
    return Array.from(
      { length: occupiedBeds },
      (_, index) =>
        `Student ${index + 1}`
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          Room Overview
        </h2>

        <div className="flex items-center gap-3 flex-wrap">

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
            key={room.id}
            room={room.room_number}
            students={generateStudents(
              room.occupied_beds
            )}
            type={formatRoomType(
              room.type
            )}
            status={room.status}
          />
        ))}

      </div>
    </div>
  );
};

export default RoomOverview;