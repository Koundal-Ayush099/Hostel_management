const students = [
  {
    name: "Alex Morgan",
    room: "Suite 402B",
    status: "ACTIVE",
    checkin: "Today, 09:15 AM",
  },
  {
    name: "Sarah Chen",
    room: "Dorm 108A",
    status: "PENDING",
    checkin: "Today, 10:45 AM",
  },
  {
    name: "James Wilson",
    room: "Suite 205C",
    status: "ACTIVE",
    checkin: "Yesterday",
  },
];

const RecentCheckins = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold">
          Recent Check-ins
        </h3>

        <button className="text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm text-gray-500">
              <th className="p-4">STUDENT</th>
              <th className="p-4">ROOM</th>
              <th className="p-4">STATUS</th>
              <th className="p-4">CHECK-IN</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.name}
                className="border-t border-gray-100"
              >
                <td className="p-4 font-medium">
                  {student.name}
                </td>

                <td className="p-4 text-gray-600">
                  {student.room}
                </td>

                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    {student.status}
                  </span>
                </td>

                <td className="p-4 text-gray-500">
                  {student.checkin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCheckins;