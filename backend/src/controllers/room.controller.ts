import { Request, Response } from "express";

import * as roomService from "../services/room.service";

import { roomSchema } from "../validations/room.validation";

export const getRooms = async (
  _: Request,
  res: Response
) => {
  try {
    const rooms =
      await roomService.getAllRooms();

    res.json(rooms);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getRoom = async (
  req: Request,
  res: Response
) => {
  try {
    const room =
      await roomService.getRoomById(
        Number(req.params.id)
      );

    if (!room) {
      return res.status(404).json({
        message: "Room not found",
      });
    }

    res.json(room);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const createRoom = async (
  req: Request,
  res: Response
) => {
  try {
    const validatedData =
      roomSchema.parse(req.body);

    const roomId =
      await roomService.createRoom(
        validatedData
      );

    res.status(201).json({
      message: "Room created",
      roomId,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      message:
        error?.errors?.[0]?.message ||
        "Server Error",
    });
  }
};

export const updateRoom = async (
  req: Request,
  res: Response
) => {
  try {
    await roomService.updateRoom(
      Number(req.params.id),
      req.body
    );

    res.json({
      message: "Room updated",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteRoom = async (
  req: Request,
  res: Response
) => {
  try {
    await roomService.deleteRoom(
      Number(req.params.id)
    );

    res.json({
      message: "Room deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
export const getAvailableRooms =
  async (
    req: Request,
    res: Response
  ) => {

    const rooms =
      await roomService.getAvailableRooms();

    res.status(200).json(
      rooms
    );
  };