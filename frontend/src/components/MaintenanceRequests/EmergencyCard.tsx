import {
  Building2,
  Hammer,
  Clock3,
} from "lucide-react";

type Request = {
  id: number;
  title: string;
  description: string;
  issue_type: string;
  status: string;
  room_number?: string;
  priority: string;
};

type Props = {
  requests: Request[];
};

const EmergencyCard = ({
  requests,
}: Props) => {

  const emergencyRequest =
    requests.find(
      (request) =>
        request.priority ===
        "EMERGENCY"
    );

  if (!emergencyRequest) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold">
          No Emergency Requests
        </h2>

        <p className="text-gray-500 mt-3">
          Everything looks good right now.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      {/* TOP */}
      <div className="flex items-start justify-between">

        <p className="text-red-600 text-xs font-semibold">
          EMERGENCY
        </p>

        <div className="flex items-center gap-4">

          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
            {emergencyRequest.status}
          </span>

          <button className="text-blue-700 hover:underline">
            View Details
          </button>

        </div>
      </div>

      {/* CONTENT */}
      <h2 className="text-4xl font-bold mt-4">
        {emergencyRequest.title}
      </h2>

      <p className="text-gray-500 mt-5 leading-relaxed">
        {
          emergencyRequest.description
        }
      </p>

      {/* FOOTER */}
      <div className="flex flex-wrap gap-8 mt-8 text-gray-600">

        <div className="flex items-center gap-2">

          <Building2 size={18} />

          Room
          {" "}
          {emergencyRequest.room_number ||
            "N/A"}

        </div>

        <div className="flex items-center gap-2">

          <Hammer size={18} />

          {
            emergencyRequest.issue_type
          }

        </div>

        <div className="flex items-center gap-2">

          <Clock3 size={18} />

          Recent

        </div>

      </div>
    </div>
  );
};

export default EmergencyCard;