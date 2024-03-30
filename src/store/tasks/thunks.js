import axios from "axios";
import { startLoading, tasksFetchError, tasksFetched } from "./slice";

const API_URL = "http://127.0.0.1:8000";

const fetchUserTasks = (token) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}/tasks/my-tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(tasksFetched(response.data));
  } catch (error) {
    dispatch(tasksFetchError(error.toString()));
  }
};

export { fetchUserTasks };
