import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserTasks } from "../store/tasks/thunks";
import {
  selectTasks,
  selectLoading,
  selectError,
} from "../store/tasks/selectors";
import { useAuth } from "../hooks/useAuth";
import "../styling/toDo.css";
// import AddTask from "./AddTask";

export default function ToDo() {
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
    <div className="to-do-box">
      <div className="task-list">
        <h2>To Do</h2>
        {/* <AddTask /> */}
        <br />

        {tasks.map((task) => (
          <div key={task.id} className="task-box">
            <p>{task.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
