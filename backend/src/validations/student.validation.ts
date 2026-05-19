import { z } from "zod";

export const studentSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name is required"),

  email: z.email(),

  phone: z
    .string()
    .min(10, "Phone number required"),

  gender: z.enum([
    "MALE",
    "FEMALE",
    "OTHER",
  ]),

  dob: z.string(),

  course: z.string(),

  year: z.number().min(1).max(5),

  status: z.enum([
    "CHECKED_IN",
    "PENDING",
    "AWAY", // dekh lena kya chahiye yaha tu
  ]),

  profileImage: z.string().optional(),

  emergencyContactName: z.string(),

  emergencyContactPhone: z.string(),

  roomId: z.number().nullable(),
});