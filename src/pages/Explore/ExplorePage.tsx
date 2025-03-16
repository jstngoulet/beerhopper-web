import { JSX, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";
import {
  Grid2 as Grid,
  Box,
  Grid2,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  Button,
} from "@mui/material";
import ExploreSection from "../../components/common/ExploreSection";
import theme from "../../components/Theme";
import Spacer from "../../components/common/Spacer";

import GrassIcon from "@mui/icons-material/Grass";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ForumIcon from '@mui/icons-material/Forum';
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import StorefrontIcon from "@mui/icons-material/Storefront";

import ItemList from "../../components/cards/ItemList";

import Grain from "../../models/api/Models/Grain";
import Hop from "../../models/api/Models/Hop";
import Yeast from "../../models/api/Models/Yeast";

import HopIcon from "../../assets/CellIcons/Default-Hop-Icon.webp";
import GraiIcon from "../../assets/CellIcons/Default-Grain-Icon.webp";
import YeastIcon from "../../assets/CellIcons/Default-Yeast-Icon.webp";
import { useNavigate } from "react-router-dom";

export default function ExplorePage(): JSX.Element {
  const isMobile: boolean = useMediaQuery("(max-width: 1000px)");
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
    navigate("/brew-sessions")
  };
  
  const openHops = () => {
    navigate("/ingredients/hops");
  };
  
  const openGrains = () => {
    navigate("/ingredients/grains");
  };
  
  const openYeasts = () => {
    navigate("/ingredients/yeasts");
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
                onDetailsClick: openIngredients,
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

  const [grainsList, setGrainsList] = useState<Grain[]>([]);
  const [hopsList, setHopsList] = useState<Hop[]>([]);
  const [yeastList, setYeastList] = useState<Yeast[]>([]);

  const API_ENDPOINT = process.env.REACT_APP_API_SERVER_HOST || "";

  useEffect(() => {
    fetch(`${API_ENDPOINT}/grains`, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer YOUR_API_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => setGrainsList(data))
      .catch((error) => console.error("Error fetching Grains:", error));

    fetch(`${API_ENDPOINT}/yeasts`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer YOUR_API_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => setYeastList(data))
      .catch((error) => console.error("Error fetching Yeasts:", error));

    fetch(`${API_ENDPOINT}/hops`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer YOUR_API_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => setHopsList(data))
      .catch((error) => console.error("Error fetching Hops:", error));
  }, [API_ENDPOINT]);

  const grainsDescriptions = [
    {
      name: "Barley",
      description:
        "The primary grain in beer due to its high enzyme content and balanced starch-to-protein ratio. It is often malted to develop complex flavors.",
    },
    {
      name: "Wheat",
      description:
        "Adds a smooth, creamy mouthfeel and is commonly used in wheat beers like Hefeweizens and Witbiers.",
    },
    {
      name: "Rye",
      description:
        "Contributes a spicy, slightly dry character, often found in Rye IPAs and Roggenbiers.",
    },
    {
      name: "Oats",
      description:
        "Provide a silky texture and haziness, popular in stouts and hazy IPAs.",
    },
    {
      name: "Corn & Rice",
      description:
        "Used in lighter lagers to add fermentable sugars while keeping the body crisp and light.",
    },
  ];

  const grains: JSX.Element = (
    <ExploreSection
      title={"Grains"}
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
            Grains are the backbone of beer, providing fermentable sugars,
            flavor, color, and body. The most common grains used in brewing
            include:
          </Typography>
          <List disablePadding sx={{ margin: 0 }}>
            {grainsDescriptions.map((tip, index) => (
              <ListItem>
                <Typography variant="body1" component="p">
                  <Box component="b">{`${tip.name}: `}</Box>
                  {tip.description}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Spacer />
          <ItemList
            items={grainsList.slice(0, 6).map((item) => ({
              title: item.name,
              imageSrc: item.iconPath ? item.iconPath : GraiIcon,
              caption: item.summary,
              onDetailsClick() {
                console.log(JSON.stringify(item));
              },
            }))}
          />
          <Spacer />
          <Box>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                boxShadow: 0,
                borderColor: "primary.main",
                borderRadius: 2,
              }}
              onClick={openGrains}
            >
              <Typography variant={"body1"} color={"text.secondary"}>
                View All Grains
              </Typography>
            </Button>
          </Box>
        </Box>
      }
    />
  );
  const hopsDescriptions = [
    {
      name: "Cascade",
      description:
        "A popular hop known for its floral, citrus, and grapefruit-like aroma, often used in American Pale Ales and IPAs.",
    },
    {
      name: "Centennial",
      description:
        "Sometimes called a 'Super Cascade,' it provides strong floral and citrus notes, widely used in hoppy beers.",
    },
    {
      name: "Citra",
      description:
        "A hop variety famous for its intense citrus, tropical fruit, and mango-like aroma, often used in modern IPAs.",
    },
    {
      name: "Saaz",
      description:
        "A traditional noble hop with a mild, earthy, and spicy aroma, commonly found in Czech Pilsners.",
    },
    {
      name: "Mosaic",
      description:
        "Known for its complex berry, tropical fruit, and piney characteristics, a favorite for IPAs and Pale Ales.",
    },
  ];

  const hops: JSX.Element = (
    <ExploreSection
      title={"Hops"}
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
          <List disablePadding sx={{ margin: 0 }}>
            {hopsDescriptions.map((tip, index) => (
              <ListItem>
                <Typography variant="body1" component="p">
                  <Box component="b">{`${tip.name}: `}</Box>
                  {tip.description}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Spacer />
          <ItemList
            items={hopsList.slice(0, 6).map((item) => ({
              title: item.name,
              imageSrc: item.iconPath ? item.iconPath : HopIcon,
              caption: item.summary,
              onDetailsClick() {
                console.log(JSON.stringify(item));
              },
            }))}
          />
          <Spacer />
          <Box>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                boxShadow: 0,
                borderColor: "primary.main",
                borderRadius: 2,
              }}
              onClick={openHops}
            >
              <Typography variant={"body1"} color={"text.secondary"}>
                View All Hops
              </Typography>
            </Button>
          </Box>
        </Box>
      }
    />
  );
  
  const yeastsDescriptions = [
    {
      name: "Saccharomyces cerevisiae",
      description:
        "A top-fermenting ale yeast that works best at warmer temperatures, producing fruity and complex flavors.",
    },
    {
      name: "Saccharomyces pastorianus",
      description:
        "A bottom-fermenting lager yeast that ferments at cooler temperatures, resulting in clean and crisp flavors.",
    },
    {
      name: "Brettanomyces",
      description:
        "A wild yeast strain known for producing funky, tart, and barnyard-like flavors, commonly used in sour and farmhouse-style beers.",
    },
    {
      name: "Lactobacillus",
      description:
        "Technically a bacteria, but often used alongside yeast to create sour beers by producing lactic acid.",
    },
    {
      name: "Pediococcus",
      description:
        "Another bacteria used in brewing, providing additional sourness and complexity, particularly in Belgian-style beers.",
    },
  ];

  const yeasts: JSX.Element = (
    <ExploreSection
      title={"Yeasts"}
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
          <List disablePadding sx={{ margin: 0 }}>
            {yeastsDescriptions.map((tip, index) => (
              <ListItem>
                <Typography variant="body1" component="p">
                  <Box component="b">{`${tip.name}: `}</Box>
                  {tip.description}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Spacer />
          <ItemList
            items={yeastList.slice(0, 6).map((item) => ({
              title: item.name,
              imageSrc: item.iconPath ? item.iconPath : YeastIcon,
              caption: item.summary,
              onDetailsClick() {
                console.log(JSON.stringify(item));
              },
            }))}
          />
          <Spacer />
          <Box>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                boxShadow: 0,
                borderColor: "primary.main",
                borderRadius: 2
              }}
              onClick={openYeasts}
            >
              <Typography variant={"body1"} color={"text.secondary"}>
                View All Yeasts
              </Typography>
            </Button>
          </Box>
        </Box>
      }
    />
  );

  const profileSection: JSX.Element = (
    <Box
      sx={{
        marginTop: "10px",
        padding: 2,
        paddingTop: 2,
        position: "sticky",
        top: 70,
      }}
    >
      <ExploreSection title="Profile"></ExploreSection>
    </Box>
  );

  const popularItemsAndLinks: JSX.Element = (
    <Box
      sx={{
        marginTop: "10px",
        padding: 2,
        paddingTop: 2,
        position: "sticky",
        top: 70,
      }}
    >
      <ExploreSection title="Popular Items" />
    </Box>
  );

  const centerContent: JSX.Element = (
    <Box
      sx={{
        marginTop: "10px",
        padding: 2,
      }}
    >
      <Grid2 container spacing={1} direction={"column"}>
        {primaryActions}
        {grains}
        {hops}
        {yeasts}
      </Grid2>
    </Box>
  );

  const mobileRender: JSX.Element = (
    <Box>
      <Grid container columns={1} direction={"row"}>
        <Grid size={1}>{centerContent}</Grid>
      </Grid>
    </Box>
  );

  const desktopRender: JSX.Element = (
    <Box>
      <Grid container columns={4} direction={"row"}>
        <Grid size={1}>{profileSection}</Grid>
        <Grid size={2}>{centerContent}</Grid>
        <Grid size={1}>{popularItemsAndLinks}</Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>BeerHopper - Web</title>
        <meta
          name="description"
          content="Your one place for everything beer."
        />
      </Helmet>
      <Suspense>
        <PageTemplate id="explore-page">
          <Navbar />
          {isMobile ? mobileRender : desktopRender}
          <Footer />
        </PageTemplate>
      </Suspense>
    </>
  );
}
