import api from "../lib/api";

export const getRequests =
  async () => {
    const response = await api.get(
      "/maintenance"
    );

    return response.data;
  };