import { Request, Response } from "express";

import * as maintenanceService from "../services/maintenance.service";

import { maintenanceSchema } from "../validations/maintenance.validation";

export const getRequests = async (
  _: Request,
  res: Response
) => {
  try {
    const requests =
      await maintenanceService.getAllRequests();

    res.json(requests);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getRequest = async (
  req: Request,
  res: Response
) => {
  try {
    const request =
      await maintenanceService.getRequestById(
        Number(req.params.id)
      );

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    res.json(request);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const createRequest = async (
  req: Request,
  res: Response
) => {
  try {
    const validatedData =
      maintenanceSchema.parse(req.body);

    const requestId =
      await maintenanceService.createRequest(
        validatedData
      );

    res.status(201).json({
      message:
        "Maintenance request created",
      requestId,
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

export const updateRequest = async (
  req: Request,
  res: Response
) => {
  try {
    await maintenanceService.updateRequest(
      Number(req.params.id),
      req.body
    );

    res.json({
      message:
        "Maintenance request updated",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteRequest = async (
  req: Request,
  res: Response
) => {
  try {
    await maintenanceService.deleteRequest(
      Number(req.params.id)
    );

    res.json({
      message:
        "Maintenance request deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};