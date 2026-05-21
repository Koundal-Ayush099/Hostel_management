import api from "../lib/api";

export const getRooms = async () => {
  const response = await api.get(
    "/rooms"
  );

  return response.data;
};

export const createRoom = async (
  data: any
) => {
  const response = await api.post(
    "/rooms",
    data
  );

  return response.data;
};
export const getAvailableRooms =
  async () => {

    const response =
      await api.get(
        "/rooms/available"
      );

    return response.data;
  };