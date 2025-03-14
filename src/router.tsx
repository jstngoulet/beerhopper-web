import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import HomePage from "./pages/Root/HomePage";
import LoginPage from "./pages/Root/LoginPage";
import Registration from "./pages/Root/RegistrationPage";
import ToolsHomePage from "./pages/Root/ToolsHomePage";
import InfusionStepToolPage from "./pages/Tools/InfuionStepToolPage";
import ExplorePage from "./pages/Explore/ExplorePage";
import NotFoundPage from "./pages/Root/NotFoundPage";
import AdjustGravityToolPage from "./pages/Tools/AdjustGravityToolPage";
import AlcoholAndAttenuationToolPage from "./pages/Tools/AlcolholAndAttenuationToolPage";
import DecocotionVolumeToolPage from "./pages/Tools/DecoctionVolumeToolPage";
import MashAdjustToolPage from "./pages/Tools/MashAdjustToolPage";
import MashPhToolPage from "./pages/Tools/MashPhToolPage";
import YeastStarterToolPage from "./pages/Tools/YeastStarterToolPage";
import RefractometerToolPage from "./pages/Tools/RefractometerToolPage";
import AdjustHopAgeToolPage from './pages/Tools/AdjustHopAgeToolPage'
import MeadNutrientsAgeToolPage from "./pages/Tools/MeadNutrientsToolPage";
import BacksweetenAgeToolPage from "./pages/Tools/BacksweetenToolCalculator";
import SulfiteToolPage from "./pages/Tools/SulfiteToolPage";
import BoilOffToolPage from "./pages/Tools/BoilOffToolPage";
import DilutionToolPage from "./pages/Tools/DilutionToolPage";
import WeightToVolumeToolPage from "./pages/Tools/WeightToVolumeToolPage";
import CarbonationToolPage from "./pages/Tools/CarbonationToolPage";

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
        <Route path="/tools/infusion-step" element={<InfusionStepToolPage />} />
        <Route
          path="/tools/decoction-volume"
          element={<DecocotionVolumeToolPage />}
        />
        <Route path="/tools/mash-adjust" element={<MashAdjustToolPage />} />
        <Route path="/tools/mash-ph" element={<MashPhToolPage />} />
        <Route path="/tools/yeast-starter" element={<YeastStarterToolPage />} />
        <Route
          path="/tools/refractometer"
          element={<RefractometerToolPage />}
        />
        <Route
          path="/tools/alcohol-and-attenuation"
          element={<AlcoholAndAttenuationToolPage />}
        />
        <Route path="/tools/hop-age" element={<AdjustHopAgeToolPage />} />
        <Route
          path="/tools/mead-nutrients"
          element={<MeadNutrientsAgeToolPage />}
        />
        <Route path="/tools/backsweeten" element={<BacksweetenAgeToolPage />} />
        <Route path="/tools/sulfite" element={<SulfiteToolPage />} />
        <Route path="/tools/boil-off" element={<BoilOffToolPage />} />
        <Route path="/tools/dilution" element={<DilutionToolPage />} />
        <Route
          path="/tools/adjust-gravity"
          element={<AdjustGravityToolPage />}
        />
        <Route
          path="/tools/weight-to-volume"
          element={<WeightToVolumeToolPage />}
        />
        <Route path="/tools/carbonation" element={<CarbonationToolPage />} />

        {/* Not Found Page */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
