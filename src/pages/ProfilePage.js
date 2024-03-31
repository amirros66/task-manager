import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../store/tasks/thunks";
import { selectLoading, selectProfile } from "../store/tasks/selectors";

export default function ProfilePage() {
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, token]);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <p>Please log in.</p>;
  }

  const handleSeeTasks = () => {
    navigate("/tasks");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {profile ? <p>Welcome! {profile.email}</p> : <p>Loading profile...</p>}
      <button onClick={logout}>Logout</button>
      <button onClick={handleSeeTasks}>See your tasks!</button>
    </div>
  );
}
