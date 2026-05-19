import { useEffect, useState } from "react";
import DashboardHeader from "../components/AdminDashboard/DashboardHeader";
import OccupancyCard from "../components/AdminDashboard/OccupancyCard";
import MaintenanceCard from "../components/AdminDashboard/MaintenanceCard";
import FeesCard from "../components/AdminDashboard/FeesCard";
import RecentCheckins from "../components/AdminDashboard/RecentCheckins";

import { getDashboardStats } from "../services/dashboard.service";

const AdminDashboard = () => {
  const [stats, setStats] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data =
          await getDashboardStats();

        setStats(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-5 pb-24">
      <DashboardHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <OccupancyCard
            totalRooms={
              stats.totalRooms
            }
            occupiedRooms={
              stats.occupiedRooms
            }
            occupancyRate={
              stats.occupancyRate
            }
          />
        </div>

        <MaintenanceCard
          activeRequests={
            stats.activeMaintenanceRequests
          }
          urgentRequests={
            stats.urgentRequests
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <FeesCard />

        <div className="lg:col-span-2">
          <RecentCheckins
            students={
              stats.recentCheckins
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;