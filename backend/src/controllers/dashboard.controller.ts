import { Request, Response } from "express";

import * as dashboardService from "../services/dashboard.service";

export const getDashboardData =
  async (
    _: Request,
    res: Response
  ) => {
    try {
      const stats =
        await dashboardService.getDashboardStats();

      res.json(stats);
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
  };