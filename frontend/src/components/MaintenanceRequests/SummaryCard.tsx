type Request = {
  id: number;
  status: string;
  priority: string;
};

type Props = {
  requests: Request[];
};

const SummaryCard = ({
  requests,
}: Props) => {

  const activeRequests =
    requests.filter(
      (request) =>
        request.status !==
        "RESOLVED"
    ).length;

  const resolvedRequests =
    requests.filter(
      (request) =>
        request.status ===
        "RESOLVED"
    ).length;

  const completionRate =
    requests.length > 0
      ? (
          (resolvedRequests /
            requests.length) *
          100
        ).toFixed(0)
      : 0;

  return (
    <div className="bg-blue-700 text-white rounded-3xl p-6 shadow-sm">

      <p className="uppercase tracking-wider text-sm text-blue-100">
        Maintenance Summary
      </p>

      <div className="space-y-6 mt-8">

        <div className="flex items-center justify-between">

          <span>
            Active Requests
          </span>

          <span className="text-2xl font-bold">
            {activeRequests}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span>
            Resolved Requests
          </span>

          <span className="text-2xl font-bold">
            {resolvedRequests}
          </span>

        </div>

      </div>

      {/* PROGRESS */}
      <div className="mt-10">

        <div className="w-full h-3 bg-blue-900 rounded-full overflow-hidden">

          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{
              width: `${completionRate}%`,
            }}
          />

        </div>

        <p className="mt-4 text-blue-100">
          {completionRate}% requests resolved
        </p>

      </div>
    </div>
  );
};

export default SummaryCard;