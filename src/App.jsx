import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import LoginForm from "./components/LoginForm.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="right-panel">
        <div className="login-section">
          <a href="#" className="login-link">
            Login
          </a>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
