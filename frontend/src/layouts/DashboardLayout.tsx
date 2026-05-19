import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import BottomNavbar from "./Sidebar";

const DashboardLayout = () => {
  return (
     <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="px-12 py-8 pb-30">
        <Outlet />
      </main>

      <BottomNavbar />
    </div>
  );
};

export default DashboardLayout;