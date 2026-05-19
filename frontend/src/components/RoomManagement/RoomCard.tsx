type Props = {
  room: string;
  students: string[];
  type: string;
  status: string;
};

const RoomCard = ({
  room,
  students,
  type,
  status,
}: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      {/* ROOM */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {room}
        </h2>

        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
      </div>

      {/* STUDENTS */}
      <div className="mt-5 space-y-3">
        {students.length > 0 ? (
          students.map((student) => (
            <div
              key={student}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100"></div>

              <span className="text-gray-700">
                {student}
              </span>
            </div>
          ))
        ) : (
          <div className="h-24 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400">
            Assign Student
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-xs uppercase text-gray-400">
          {type}
        </span>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            status === "VACANT"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default RoomCard;