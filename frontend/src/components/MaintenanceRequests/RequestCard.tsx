type Props = {
  priority: string;
  title: string;
  room: string;
  type: string;
  reporter: string;
  status: string;
  time: string;
  color: "red" | "blue" | "green" | "orange";
};

const colorStyles = {
  red: {
    text: "text-red-600",
    badge: "bg-red-100 text-red-600",
  },
  blue: {
    text: "text-blue-600",
    badge: "bg-blue-100 text-blue-600",
  },
  green: {
    text: "text-green-600",
    badge: "bg-green-100 text-green-600",
  },
  orange: {
  text: "text-orange-600",
  badge: "bg-orange-100 text-orange-600",
},
};

const RequestCard = ({
  priority,
  title,
  room,
  type,
  reporter,
  status,
  time,
  color,
}: Props) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      {/* TOP */}
      <div className="flex items-start justify-between">
        <p className={`text-xs font-semibold ${colorStyles[color].text}`}>
          {priority}
        </p>

        <span
          className={`text-xs px-3 py-1 rounded-full ${colorStyles[color].badge}`}
        >
          {status}
        </span>
      </div>

      <h2 className="text-3xl font-bold mt-4">
        {title}
      </h2>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div>
          <p className="text-gray-400 text-sm">
            Room
          </p>

          <h4 className="font-bold text-xl mt-1">
            {room}
          </h4>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Type
          </p>

          <h4 className="font-bold text-xl mt-1">
            {type}
          </h4>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex items-center gap-3 mt-8">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>

        <div>
          <p className="font-medium">
            Reported by {reporter}
          </p>

          <p className="text-gray-400 text-sm">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;