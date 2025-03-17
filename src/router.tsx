import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import React, { JSX } from "react";

import HomePage from "./pages/Root/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import Registration from "./pages/Auth/RegistrationPage";
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
import IngredientsPage from "./pages/Ingredients/IngredientsPage";
import BeerPage from "./pages/Root/BeerPage";
import BreweriesPage from "./pages/Root/BreweriesPage";
import RecipesPage from "./pages/Recipes/RecipesPage";
import ForumsPage from "./pages/Root/ForumsPage";
import GrainsPage from "./pages/Ingredients/GrainsPage";
import HopsPage from "./pages/Ingredients/HopsPage";
import YeastPage from "./pages/Ingredients/YeastPage";
import BrewDayPage from "./pages/BrewDay/BrewDayPage";


import { determineIsLoggedIn } from "./models/api/Auth-Helpers";
interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  return determineIsLoggedIn() ? element : <Navigate to="/login" replace />;
};

export default function Router(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/tools" element={<ToolsHomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        {/* Example Protected Route
         <Route
          path="/explore"
          element={<ProtectedRoute element={<ExplorePage />} />}
        /> */}

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

        {/* Brew Sessions */}
        <Route
          path="/brew-sessions"
          element={<ProtectedRoute element={<BrewDayPage />} />}
        />

        {/*Ingredients Pages */}
        <Route path="/ingredients/hops" element={<HopsPage />} />
        <Route path="/ingredients/grains" element={<GrainsPage />} />
        <Route path="/ingredients/yeasts" element={<YeastPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />

        {/*Detail Pages */}
        <Route path="/beers" element={<BeerPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/breweries" element={<BreweriesPage />} />
        <Route path="/forums" element={<ForumsPage />} />

        {/* Not Found Page */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
