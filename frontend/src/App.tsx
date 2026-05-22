import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import StudentLayout from "./layouts/StudentLayout";

import Login from "./pages/Login";

import AdminDashboard from "./pages/AdminDashboard";
import RoomAllocation from "./pages/RoomManagement";
import MaintenanceRequests from "./pages/MaintenanceRequests";
import StudentDirectory from "./pages/StudentDirectory";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentRequest from "./pages/student/StudentRequest";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* REDIRECT */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* ADMIN ROUTES */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />

          <Route path="/rooms" element={<RoomAllocation />} />

          <Route path="/requests" element={<MaintenanceRequests />} />

          <Route path="/students" element={<StudentDirectory />} />
        </Route>

        {/* STUDENT ROUTES */}
        <Route element={<StudentLayout />}>
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/request" element={<StudentRequest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
