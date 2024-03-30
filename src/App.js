import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
      {/* <Router> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      {/* </Router> */}
    </AuthProvider>
  );
}

export default App;
