import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <p>Please log in</p>;
  }

  const handleSeeTasks = () => {
    navigate("/tasks");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome! {user.email}</p>
      <button onClick={logout}>Logout</button>
      <button onClick={handleSeeTasks}>See your tasks!</button>{" "}
    </div>
  );
}
