import MaintenanceHeader from "../components/MaintenanceRequests/MaintenanceHeader";
import RequestTabs from "../components/MaintenanceRequests/RequestTabs";
import RequestCard from "../components/MaintenanceRequests/RequestCard";
import EmergencyCard from "../components/MaintenanceRequests/EmergencyCard";
import SummaryCard from "../components/MaintenanceRequests/SummaryCard";
import HistoryTable from "../components/MaintenanceRequests/HistoryTable";

const MaintenanceRequests = () => {
  return (
    <div className="space-y-6 pb-24">
      <MaintenanceHeader />

      <RequestTabs />

      {/* TOP REQUESTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <RequestCard
          priority="HIGH PRIORITY"
          title="Clogged Drain"
          room="402-B"
          type="Plumbing"
          reporter="Alex Chen"
          status="Open"
          time="2 hours ago"
          color="red"
        />

        <RequestCard
          priority="MEDIUM PRIORITY"
          title="AC Not Cooling"
          room="115-A"
          type="Electrical"
          reporter="Sarah J."
          status="In Progress"
          time="Yesterday, 4:15 PM"
          color="blue"
        />

        <RequestCard
          priority="LOW PRIORITY"
          title="Flickering Light"
          room="204-C"
          type="Electrical"
          reporter="Anonymous"
          status="Resolved"
          time="2 days ago"
          color="green"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2">
          <EmergencyCard />
        </div>

        <SummaryCard />
      </div>

      {/* HISTORY */}
      <HistoryTable />
    </div>
  );
};

export default MaintenanceRequests;