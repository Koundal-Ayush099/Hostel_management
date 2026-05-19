import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import pool from "./config/db";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const connection = await pool.getConnection();

    console.log("MySQL Connected");

    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Database Connection Failed");

    console.log(error);
  }
};

startServer();
