import React from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
