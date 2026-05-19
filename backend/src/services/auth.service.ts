import pool from "../config/db";

export const findUserByEmail = async (
  email: string
) => {
  const [rows]: any = await pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return rows[0];
};

export const createUser = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const [result]: any = await pool.query(
    `
    INSERT INTO users (name, email, password, role)
    VALUES (?, ?, ?, ?)
    `,
    [name, email, password, role]
  );

  return result.insertId;
};