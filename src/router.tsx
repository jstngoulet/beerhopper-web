import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import HomePage from "./pages/Root/HomePage";
import LoginPage from "./pages/Root/LoginPage";
import Registration from "./pages/Root/RegistrationPage";
import ToolsHomePage from "./pages/Root/ToolsHomePage";
import InfusionStepToolPage from "./pages/Tools/InfuionStepToolPage";
import ExplorePage from "./pages/Explore/ExplorePage";

export default function Router(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/tools" element={<ToolsHomePage />} />
        <Route path="/explore" element={<ExplorePage />} />

        {/* Tool Routes */}
        <Route
          path="/tools/infusion-step-tool"
          element={<InfusionStepToolPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
