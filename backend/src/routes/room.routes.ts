import express from "express";

import protect from "../middleware/auth.middleware";

import {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  getAvailableRooms,
} from "../controllers/room.controller";

const router = express.Router();

router.get("/", protect, getRooms);
router.get("/available", protect, getAvailableRooms);

router.get("/:id", protect, getRoom);

router.post("/", protect, createRoom);

router.put("/:id", protect, updateRoom);

router.delete("/:id", protect, deleteRoom);
export default router;
