import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { addTask } from "../store/tasks/thunks";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { token } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && token) {
      dispatch(addTask({ title }, token));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />{" "}
      {""}
      <button type="submit">+</button>
    </form>
  );
}
