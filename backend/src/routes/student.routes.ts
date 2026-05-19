import express from "express";

import protect from "../middleware/auth.middleware";

import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller";

const router = express.Router();

router.get("/", protect, getStudents);

router.get("/:id", protect, getStudent);

router.post("/", protect, createStudent);

router.put("/:id", protect, updateStudent);

router.delete("/:id", protect, deleteStudent);

export default router;