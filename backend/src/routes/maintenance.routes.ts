import express from "express";

import protect from "../middleware/auth.middleware";

import {
  getRequests,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
} from "../controllers/maintenance.controller";

const router = express.Router();

router.get("/", protect, getRequests);

router.get("/:id", protect, getRequest);

router.post("/", protect, createRequest);

router.put("/:id", protect, updateRequest);

router.delete("/:id", protect, deleteRequest);

export default router;