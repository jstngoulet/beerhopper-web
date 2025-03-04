import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import React from "react";

export default function Router(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
