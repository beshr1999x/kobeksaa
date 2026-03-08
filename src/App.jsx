import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LandingPageMobile } from "./screens/LandingPageMobile";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageMobile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};