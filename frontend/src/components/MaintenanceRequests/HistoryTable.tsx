const history = [
  {
    issue: "Wi-Fi Connection Issue",
    room: "102-A",
    priority: "Medium",
    status: "Resolved",
    date: "Oct 12, 2023",
  },
];

const HistoryTable = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5">
        Recent History
      </h3>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm text-gray-500">
              <th className="p-5">ISSUE TYPE</th>
              <th className="p-5">ROOM</th>
              <th className="p-5">PRIORITY</th>
              <th className="p-5">STATUS</th>
              <th className="p-5">DATE</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr
                key={item.issue}
                className="border-t border-gray-100"
              >
                <td className="p-5 font-medium">
                  {item.issue}
                </td>

                <td className="p-5">
                  {item.room}
                </td>

                <td className="p-5 text-blue-600">
                  {item.priority}
                </td>

                <td className="p-5">
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </td>

                <td className="p-5 text-gray-500">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;