import pool from "../config/db";

export const getAllRooms = async () => {
  const [rows] = await pool.query(`
    SELECT *
    FROM rooms
    ORDER BY created_at DESC
  `);

  return rows;
};

export const getRoomById = async (
  id: number
) => {
  const [rows]: any = await pool.query(
    `
    SELECT *
    FROM rooms
    WHERE id = ?
    `,
    [id]
  );

  return rows[0];
};

export const createRoom = async (
  data: any
) => {
  const {
    roomNumber,
    block,
    floor,
    type,
    capacity,
    occupiedBeds,
    status,
  } = data;

  const [result]: any = await pool.query(
    `
    INSERT INTO rooms (
      room_number,
      block,
      floor,
      type,
      capacity,
      occupied_beds,
      status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      roomNumber,
      block,
      floor,
      type,
      capacity,
      occupiedBeds,
      status,
    ]
  );

  return result.insertId;
};

export const updateRoom = async (
  id: number,
  data: any
) => {
  const {
    roomNumber,
    block,
    floor,
    type,
    capacity,
    occupiedBeds,
    status,
  } = data;

  await pool.query(
    `
    UPDATE rooms
    SET
      room_number = ?,
      block = ?,
      floor = ?,
      type = ?,
      capacity = ?,
      occupied_beds = ?,
      status = ?
    WHERE id = ?
    `,
    [
      roomNumber,
      block,
      floor,
      type,
      capacity,
      occupiedBeds,
      status,
      id,
    ]
  );
};

export const deleteRoom = async (
  id: number
) => {
  await pool.query(
    `
    DELETE FROM rooms
    WHERE id = ?
    `,
    [id]
  );
};
export const getAvailableRooms =
  async () => {

    const [rows] =
      await pool.query(`
        SELECT
          id,
          room_number,
          status
        FROM rooms
        WHERE status IN (
          'VACANT',
          'PARTIAL'
        )
      `);

    return rows;
  };