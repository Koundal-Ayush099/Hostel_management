import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./pages/AdminDashboard";
import RoomAllocation from "./pages/RoomManagement";
import MaintenanceRequests from "./pages/MaintenanceRequests";
import StudentDirectory from "./pages/StudentDirectory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route
            path="/"
            element={<AdminDashboard />}
          />
          <Route
            path="/rooms"
            element={<RoomAllocation />}
          />
          <Route
            path="/requests"
            element={<MaintenanceRequests />}
          />
          <Route
            path="/students"
            element={<StudentDirectory />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;