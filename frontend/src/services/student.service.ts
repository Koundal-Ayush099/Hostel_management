import api from "../lib/api";

export const getStudents = async () => {
  const response = await api.get(
    "/students"
  );

  return response.data;
};