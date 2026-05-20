type Request = {
  id: number;
  title: string;
  room_number?: string;
  priority: string;
  status: string;
  created_at?: string;
};

type Props = {
  requests: Request[];
};

const HistoryTable = ({
  requests,
}: Props) => {

  const formatPriority = (
    priority: string
  ) => {
    return priority
      .toLowerCase()
      .replace(
        /\b\w/g,
        (char) =>
          char.toUpperCase()
      );
  };

  return (
    <div>

      <h3 className="text-2xl font-semibold mb-5">
        Recent History
      </h3>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm">

        <table className="w-full">

          <thead className="bg-gray-50">
            <tr className="text-left text-sm text-gray-500">

              <th className="p-5">
                ISSUE TYPE
              </th>

              <th className="p-5">
                ROOM
              </th>

              <th className="p-5">
                PRIORITY
              </th>

              <th className="p-5">
                STATUS
              </th>

              <th className="p-5">
                DATE
              </th>

            </tr>
          </thead>

          <tbody>

            {requests.map((item) => (

              <tr
                key={item.id}
                className="border-t border-gray-100"
              >

                <td className="p-5 font-medium">
                  {item.title}
                </td>

                <td className="p-5">
                  {item.room_number ||
                    "N/A"}
                </td>

                <td className="p-5 text-blue-600">
                  {formatPriority(
                    item.priority
                  )}
                </td>

                <td className="p-5">

                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    {item.status}
                  </span>

                </td>

                <td className="p-5 text-gray-500">
                  Recent
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