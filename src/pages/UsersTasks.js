import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserTasks } from "../store/tasks/thunks";
import {
  selectTasks,
  selectLoading,
  selectError,
} from "../store/tasks/selectors";
import { useAuth } from "../hooks/useAuth";
import ToDo from "../components/ToDo";
import InProgress from "../components/InProgress";
import Completed from "../components/Completed";
import "../styling/taskPage.css";

export default function UsersTasks() {
  // const dispatch = useDispatch();
  // const tasks = useSelector(selectTasks);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const { token } = useAuth();

  // useEffect(() => {
  //   if (token) {
  //     dispatch(fetchUserTasks(token));
  //   }
  // }, [dispatch, token]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="current-tasks">
        <h1>Tasks</h1>
        {/* {tasks.map((task) => (
          <div key={task.id}>{task.title}</div>
        ))} */}
      </div>
      <div className="container">
        <ToDo />
        <InProgress />
        <Completed />
      </div>
    </div>
  );
}
