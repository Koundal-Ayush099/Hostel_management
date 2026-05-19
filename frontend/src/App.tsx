import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import AdminDashboard from "./pages/AdminDashboard";
import RoomAllocation from "./pages/RoomManagement";
import MaintenanceRequests from "./pages/MaintenanceRequests";
import StudentDirectory from "./pages/StudentDirectory";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* DASHBOARD */}
        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
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