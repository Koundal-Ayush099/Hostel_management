import { BedDouble, Mail, MoreVertical } from "lucide-react";

type Props = {
  name: string;
  course: string;
  year: string;
  room: string;
  status: string;
  image: string;
};

const statusStyles: Record<string, string> = {
  "Checked In": "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Away: "bg-gray-100 text-gray-600",
};

const dotStyles: Record<string, string> = {
  "Checked In": "bg-green-500",
  Pending: "bg-yellow-500",
  Away: "bg-gray-400",
};

const StudentCard = ({
  name,
  course,
  year,
  room,
  status,
  image,
}: Props) => {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-2xl object-cover"
          />

          <div
            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${dotStyles[status]}`}
          ></div>
        </div>
        <div className="text-right">
          <span
            className={`text-sm px-3 py-1 rounded-xl ${statusStyles[status]}`}
          >
            {status}
          </span>

          <div className="flex items-center justify-end gap-1 mt-3 text-sm text-gray-500">
            <BedDouble size={14} />

            {room}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-5">
        <h2 className="text-2xl font-bold">
          {name}
        </h2>

        <p className="text-gray-500 mt-1">
          {course} • {year}
        </p>
      </div>

      {/* FOOTER */}
      <div className="flex items-center gap-3 mt-6">
        <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white h-11 rounded-xl flex items-center justify-center gap-2 transition">
          <Mail size={16} />

          Contact
        </button>

        <button className="w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 flex items-center justify-center transition">
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;