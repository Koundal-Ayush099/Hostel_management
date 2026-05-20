import { useEffect, useState } from "react";

import MaintenanceHeader from "../components/MaintenanceRequests/MaintenanceHeader";

import RequestTabs from "../components/MaintenanceRequests/RequestTabs";

import RequestCard from "../components/MaintenanceRequests/RequestCard";

import EmergencyCard from "../components/MaintenanceRequests/EmergencyCard";

import SummaryCard from "../components/MaintenanceRequests/SummaryCard";

import HistoryTable from "../components/MaintenanceRequests/HistoryTable";

import { getRequests } from "../services/maintenance.service";

const MaintenanceRequests = () => {
  const [requests, setRequests] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getRequests();

        setRequests(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="space-y-6 pb-24">
      <MaintenanceHeader />

      <RequestTabs />

      {/* TOP REQUESTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {requests.slice(0, 3).map((request) => (
          <RequestCard
            key={request.id}
            priority={`${request.priority} PRIORITY`}
            title={request.title}
            room={request.room_number || "N/A"}
            type={request.issue_type}
            reporter={request.reported_by}
            status={request.status}
            time="Recent"
            color={
              request.priority === "EMERGENCY"
                ? "red"
                : request.priority === "HIGH"
                  ? "orange"
                  : request.priority === "MEDIUM"
                    ? "blue"
                    : "green"
            }
          />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2">
          <EmergencyCard requests={requests} />
        </div>

        <SummaryCard requests={requests} />
      </div>

      {/* HISTORY */}
      <HistoryTable requests={requests} />
    </div>
  );
};

export default MaintenanceRequests;
