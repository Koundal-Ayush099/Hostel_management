import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import {
  findUserByEmail,
  createUser,
} from "../services/auth.service";

import generateToken from "../utils/generateToken";

export const registerUser = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      email,
      password,
      role,
    } = req.body;

    const existingUser =
      await findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(password, salt);

    const userId = await createUser(
      name,
      email,
      hashedPassword,
      role || "STAFF"
    );

    const token = generateToken(userId);

    res.status(201).json({
      id: userId,
      name,
      email,
      role,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const loginUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } =
      req.body;

    const user =
      await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user.id);

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};