import pool from "../config/db";

export const getDashboardStats =
  async () => {
    // TOTAL ROOMS
    const [totalRooms]: any =
      await pool.query(`
        SELECT COUNT(*) AS total
        FROM rooms
      `);

    // OCCUPIED ROOMS
    const [occupiedRooms]: any =
      await pool.query(`
        SELECT COUNT(*) AS occupied
        FROM rooms
        WHERE status = 'OCCUPIED'
      `);

    // VACANT ROOMS
    const [vacantRooms]: any =
      await pool.query(`
        SELECT COUNT(*) AS vacant
        FROM rooms
        WHERE status = 'VACANT'
      `);

    // ACTIVE REQUESTS
    const [activeRequests]: any =
      await pool.query(`
        SELECT COUNT(*) AS active
        FROM maintenance_requests
        WHERE status != 'RESOLVED'
      `);

    // URGENT REQUESTS
    const [urgentRequests]: any =
      await pool.query(`
        SELECT COUNT(*) AS urgent
        FROM maintenance_requests
        WHERE priority = 'EMERGENCY'
      `);

    // RECENT CHECKINS
    const [recentCheckins]: any =
      await pool.query(`
        SELECT
          students.id,
          students.full_name,
          students.course,
          rooms.room_number
        FROM students
        LEFT JOIN rooms
        ON students.room_id = rooms.id
        ORDER BY students.created_at DESC
        LIMIT 5
      `);

    const total =
      totalRooms[0].total;

    const occupied =
      occupiedRooms[0].occupied;

    const occupancyRate =
      total > 0
        ? ((occupied / total) * 100).toFixed(1)
        : 0;

    return {
      totalRooms: total,

      occupiedRooms:
        occupied,

      vacantRooms:
        vacantRooms[0].vacant,

      occupancyRate,

      activeMaintenanceRequests:
        activeRequests[0].active,

      urgentRequests:
        urgentRequests[0].urgent,

      recentCheckins,
    };
  };