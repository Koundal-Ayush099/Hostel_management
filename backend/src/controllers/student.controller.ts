import { Request, Response } from "express";

import * as studentService from "../services/student.service";
import { studentSchema } from "../validations/student.validation";
export const getStudents = async (
  _: Request,
  res: Response
) => {
  try {
    const students =
      await studentService.getAllStudents();

    res.json(students);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getStudent = async (
  req: Request,
  res: Response
) => {
  try {
    const student =
      await studentService.getStudentById(
        Number(req.params.id)
      );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const createStudent = async (
  req: Request,
  res: Response
) => {
  try {
    const validatedData =
      studentSchema.parse(req.body);

    const studentId =
      await studentService.createStudent(
        validatedData
      );

    res.status(201).json({
      message: "Student created",
      studentId,
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

export const updateStudent = async (
  req: Request,
  res: Response
) => {
  try {
    await studentService.updateStudent(
      Number(req.params.id),
      req.body
    );

    res.json({
      message: "Student updated",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response
) => {
  try {
    await studentService.deleteStudent(
      Number(req.params.id)
    );

    res.json({
      message: "Student deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};