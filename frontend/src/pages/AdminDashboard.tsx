import DashboardHeader from "../components/AdminDashboard/DashboardHeader";
import OccupancyCard from "../components/AdminDashboard/OccupancyCard";
import MaintenanceCard from "../components/AdminDashboard/MaintenanceCard";
import FeesCard from "../components/AdminDashboard/FeesCard";
import RecentCheckins from "../components/AdminDashboard/RecentCheckins";

const AdminDashboard = () => {
  return (
    <div className="space-y-5 overflow-hidden">
      <DashboardHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <OccupancyCard />
        </div>

        <MaintenanceCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <FeesCard />

        <div className="lg:col-span-2">
          <RecentCheckins />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;