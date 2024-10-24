import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const updateUser = async (data: FormData) => {
  const response = await axios.put(`/api/users/${data.keys}`, data);
  return response.data;
};

export const useUpdateUser = () => {
  return useMutation(updateUser);
};
