import axios from "axios";
import {
  startLoading,
  tasksFetchError,
  tasksFetched,
  profileFetched,
  addTaskSuccess,
  addTaskFailure,
} from "./slice";

const API_URL = "http://127.0.0.1:8000";

const fetchUserProfile = (token) => async (dispatch) => {
  try {
    dispatch(startLoading());
    console.log(`Bearer ${token}`);
    const response = await axios.get(`${API_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(profileFetched(response.data));
  } catch (error) {
    dispatch(tasksFetchError(error.toString()));
  }
};

const fetchUserTasks = (token) => async (dispatch) => {
  try {
    dispatch(startLoading());
    console.log(`Bearer ${token}`);
    const response = await axios.get(`${API_URL}/tasks/my-tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(tasksFetched(response.data));
  } catch (error) {
    dispatch(tasksFetchError(error.toString()));
  }
};

const addTask =
  ({ title }, token) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_URL}/tasks`,
        { title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(addTaskSuccess(response.data));
    } catch (error) {
      dispatch(addTaskFailure(error.toString()));
    }
  };

export { fetchUserTasks, fetchUserProfile, addTask };
