import pool from "../config/db";

export const getAllStudents = async () => {
  const [rows] = await pool.query(`
    SELECT 
      students.*,
      rooms.room_number,
      rooms.block
    FROM students
    LEFT JOIN rooms
    ON students.room_id = rooms.id
    ORDER BY students.created_at DESC
  `);

  return rows;
};

export const getStudentById = async (
  id: number
) => {
  const [rows]: any = await pool.query(
    `
    SELECT 
      students.*,
      rooms.room_number,
      rooms.block
    FROM students
    LEFT JOIN rooms
    ON students.room_id = rooms.id
    WHERE students.id = ?
    `,
    [id]
  );

  return rows[0];
};

export const createStudent = async (
  data: any
) => {
  const {
    fullName,
    email,
    phone,
    gender,
    dob,
    course,
    year,
    status,
    profileImage,
    emergencyContactName,
    emergencyContactPhone,
    roomId,
  } = data;

  const [result]: any = await pool.query(
    `
    INSERT INTO students (
      full_name,
      email,
      phone,
      gender,
      dob,
      course,
      year,
      status,
      profile_image,
      emergency_contact_name,
      emergency_contact_phone,
      room_id
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      fullName,
      email,
      phone,
      gender,
      dob,
      course,
      year,
      status,
      profileImage,
      emergencyContactName,
      emergencyContactPhone,
      roomId,
    ]
  );

  return result.insertId;
};

export const updateStudent = async (
  id: number,
  data: any
) => {
  const {
    fullName,
    email,
    phone,
    gender,
    dob,
    course,
    year,
    status,
    profileImage,
    emergencyContactName,
    emergencyContactPhone,
    roomId,
  } = data;

  await pool.query(
    `
    UPDATE students
    SET
      full_name = ?,
      email = ?,
      phone = ?,
      gender = ?,
      dob = ?,
      course = ?,
      year = ?,
      status = ?,
      profile_image = ?,
      emergency_contact_name = ?,
      emergency_contact_phone = ?,
      room_id = ?
    WHERE id = ?
    `,
    [
      fullName,
      email,
      phone,
      gender,
      dob,
      course,
      year,
      status,
      profileImage,
      emergencyContactName,
      emergencyContactPhone,
      roomId,
      id,
    ]
  );
};

export const deleteStudent = async (
  id: number
) => {
  await pool.query(
    `
    DELETE FROM students
    WHERE id = ?
    `,
    [id]
  );
};