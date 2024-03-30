import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {user.email}</p>{" "}
      {/* Adjust according to your user data structure */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
