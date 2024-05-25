import axios from "axios";

export const getAllTasks = async () => {
  const result = await axios.get("http://localhost:2222/api/tasks");
  return result;
};

export const createTask = async (data) => {
  const result = await axios.post("http://localhost:2222/api/tasks", data);
  return result;
};

export const updateTask = async (data, id) => {
  const result = await axios.put(
    `http://localhost:2222/api/tasks/${id}`,
    data
  );
  return result;
};

export const deleteTask = async (id) => {
  const result = await axios.delete(`http://localhost:2222/api/tasks/${id}`);
  return result;
};
