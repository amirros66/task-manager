import React from "react";
import ToDo from "../components/ToDo";
import InProgress from "../components/InProgress";
import Completed from "../components/Completed";
import "../styling/taskPage.css";
import AddTask from "../components/AddTask";

export default function UsersTasks() {
  return (
    <div>
      <div className="title">
        <h1>Tasks</h1>
        <AddTask />
      </div>
      <div className="container">
        <ToDo />
        <InProgress />
        <Completed />
      </div>
    </div>
  );
}
