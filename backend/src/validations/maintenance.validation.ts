import { z } from "zod";

export const maintenanceSchema = z.object({
  title: z.string().min(3),

  description: z.string().min(5),

  issueType: z.enum([
    "PLUMBING",
    "ELECTRICAL",
    "CARPENTRY",
    "OTHER",
  ]),

  priority: z.enum([
    "LOW",
    "MEDIUM",
    "HIGH",
    "EMERGENCY",
  ]),

  status: z.enum([
    "OPEN",
    "IN_PROGRESS",
    "RESOLVED",
  ]),

  reportedBy: z.string(),

  assignedTo: z.string(),

  roomId: z.number(),
});