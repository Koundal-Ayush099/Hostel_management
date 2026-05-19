import pool from "../config/db";

export const getAllRequests = async () => {
  const [rows] = await pool.query(`
    SELECT
      maintenance_requests.*,
      rooms.room_number,
      rooms.block
    FROM maintenance_requests
    LEFT JOIN rooms
    ON maintenance_requests.room_id = rooms.id
    ORDER BY maintenance_requests.created_at DESC
  `);

  return rows;
};

export const getRequestById = async (
  id: number
) => {
  const [rows]: any = await pool.query(
    `
    SELECT
      maintenance_requests.*,
      rooms.room_number,
      rooms.block
    FROM maintenance_requests
    LEFT JOIN rooms
    ON maintenance_requests.room_id = rooms.id
    WHERE maintenance_requests.id = ?
    `,
    [id]
  );

  return rows[0];
};

export const createRequest = async (
  data: any
) => {
  const {
    title,
    description,
    issueType,
    priority,
    status,
    reportedBy,
    assignedTo,
    roomId,
  } = data;

  const [result]: any = await pool.query(
    `
    INSERT INTO maintenance_requests (
      title,
      description,
      issue_type,
      priority,
      status,
      reported_by,
      assigned_to,
      room_id
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      title,
      description,
      issueType,
      priority,
      status,
      reportedBy,
      assignedTo,
      roomId,
    ]
  );

  return result.insertId;
};

export const updateRequest = async (
  id: number,
  data: any
) => {
  const {
    title,
    description,
    issueType,
    priority,
    status,
    reportedBy,
    assignedTo,
    roomId,
  } = data;

  await pool.query(
    `
    UPDATE maintenance_requests
    SET
      title = ?,
      description = ?,
      issue_type = ?,
      priority = ?,
      status = ?,
      reported_by = ?,
      assigned_to = ?,
      room_id = ?
    WHERE id = ?
    `,
    [
      title,
      description,
      issueType,
      priority,
      status,
      reportedBy,
      assignedTo,
      roomId,
      id,
    ]
  );
};

export const deleteRequest = async (
  id: number
) => {
  await pool.query(
    `
    DELETE FROM maintenance_requests
    WHERE id = ?
    `,
    [id]
  );
};