import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserTasks } from "../store/tasks/thunks";
import {
  selectTasks,
  selectLoading,
  selectError,
} from "../store/tasks/selectors";
import { useAuth } from "../hooks/useAuth";

export default function UsersTasks() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(fetchUserTasks(token));
    }
  }, [dispatch, token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
