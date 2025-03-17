import { JSX } from "react";
import { Box, Typography } from "@mui/material";
import ExploreSection from "../../components/common/ExploreSection";
import theme from "../../components/Theme";
import Spacer from "../../components/common/Spacer";

import GrassIcon from "@mui/icons-material/Grass";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ForumIcon from "@mui/icons-material/Forum";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import StorefrontIcon from "@mui/icons-material/Storefront";

import ItemList from "../../components/cards/ItemList";

import { useNavigate } from "react-router-dom";
import DashboardPageTemplate from "../../components/templates/DashboardPageTemplate";
import { isLoggedIn } from "../../models/api/Auth-Helpers";
import TitleView from "../../components/Views/TitleView";

export default function ExplorePage(): JSX.Element {
  const navigate = useNavigate();

  const openIngredients = () => {
    navigate("/ingredients");
  };
  const openBeers = () => {
    navigate("/beers");
  };
  const openRecipes = () => {
    navigate("/recipes");
  };
  const openBreweries = () => {
    navigate("/breweries");
  };
  const openBrewDay = () => {
    navigate("/brew-sessions");
  };
  const openForums = () => {
    navigate("/forums");
  };

  const primaryActions: JSX.Element = (
    <ExploreSection
      title={"Where do you want to start?"}
      content={
        <Box>
          <Typography
            variant="body1"
            component="p"
            color={theme.palette.text.primary}
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            Quickly access our most popular actions by browsing by category! Or,
            if you are ready to start brewing, pick find a reciepe from our
            marketplace and start your brew day!
          </Typography>
          <Spacer />
          <ItemList
            items={[
              {
                imageIcon: <GrassIcon fontSize="medium" />,
                title: "Ingredients",
                isFilled: true,
                onDetailsClick: openIngredients,
              },
              {
                imageIcon: <ForumIcon fontSize="medium" />,
                title: "Forums",
                isFilled: true,
                onDetailsClick: openForums,
              },
              {
                imageIcon: <SportsBarIcon fontSize="medium" />,
                title: "Beers",
                isFilled: true,
                onDetailsClick: openBeers,
              },
              {
                imageIcon: <MenuBookIcon fontSize="medium" />,
                title: "Recipes",
                isFilled: true,
                onDetailsClick: openRecipes,
              },
              {
                imageIcon: <StorefrontIcon fontSize="medium" />,
                title: "Breweries",
                isFilled: true,
                onDetailsClick: openBreweries,
              },
              {
                imageIcon: <GroupWorkIcon fontSize="medium" />,
                title: "Start Brewing",
                isFilled: true,
                onDetailsClick: openBrewDay,
              },
            ]}
          />
          <Spacer />
        </Box>
      }
    />
  );

  const loggedOutContent: JSX.Element = (
    <>
      <TitleView title="Is NOT Logged In" />
    </>
  );

  const loggedInContent: JSX.Element = (
    <>
      <TitleView title="Is Logged In" />
    </>
  );

  return (
    <>
      <DashboardPageTemplate
        pageName={"Explore"}
        pageDescription={"Explore Everything BeerHopper Has to Offer!"}
        pageContent={
          <>
            {primaryActions}
            {isLoggedIn ? loggedInContent : loggedOutContent}
          </>
        }
        id={"explore-page"}
      />
    </>
  );
}
