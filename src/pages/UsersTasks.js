import React from "react";
import ToDo from "../components/ToDo";
import InProgress from "../components/InProgress";
import Completed from "../components/Completed";
import "../styling/taskPage.css";

export default function UsersTasks() {
  return (
    <div>
      <div className="current-tasks">
        <h1>Tasks</h1>
      </div>
      <div className="container">
        <ToDo />
        <InProgress />
        <Completed />
      </div>
    </div>
  );
}
