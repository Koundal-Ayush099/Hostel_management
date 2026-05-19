import { z } from "zod";

export const roomSchema = z.object({
  roomNumber: z.string(),

  block: z.string(),

  floor: z.number(),

  type: z.enum([
    "SINGLE",
    "DOUBLE",
    "TRIPLE"
  ]),

  capacity: z.number().min(1),

  occupiedBeds: z.number().min(0),

  status: z.enum([
    "VACANT",
    "OCCUPIED",
    "PARTIAL",
    "MAINTENANCE",
  ]),
});