import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import testRoutes from "./routes/test.routes";
import studentRoutes from "./routes/student.routes";
import roomRoutes from "./routes/room.routes";
import maintenanceRoutes from "./routes/maintenance.routes";
import dashboardRoutes from "./routes/dashboard.routes";
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hostel Management API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/maintenance",maintenanceRoutes);
app.use("/api/dashboard",dashboardRoutes);
export default app;