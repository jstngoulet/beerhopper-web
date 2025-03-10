import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";
import TitleView from "../../components/Views/TitleView";
import SubtitleView from "../../components/Views/SubtitleView";
import ImageView from "../../components/Views/ImageView";
import ButtonActionView from "../../components/Views/ButtonActionView";
import SectionImage from "../../components/Views/SectionImage";
import {
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { tools } from '../../models/api/AvailableTools'
import { Link } from "react-router";

export default function HomePage(): JSX.Element {
  function handleLogin() {
    window.location.href = "/login";
  }

  function handleRegistration() {
    window.location.href = "/register";
  }

  function handleTools() {
    window.location.href = "/tools";
  }

  function handleExplore() {
    window.location.href = "/explore";
  }

  const features = [
    "Brewery Profiles: Breweries can create profiles to showcase their unique beers, events, and stories.",
    "Beer Reviews & Ratings: Users can rate and review beers, helping others discover new favorites.",
    "Event Listings: Breweries can promote upcoming events such as tastings, festivals, and tours.",
    "Community Interaction: Connect with other beer enthusiasts, share experiences, and discuss brews.",
    "Virtual Tastings: Participate in or host virtual tasting events to engage with others and explore new flavors.",
    "Networking Opportunities: Breweries and industry professionals can collaborate and build partnerships.",
    "Brewery Spotlights: Featured sections highlighting breweries and their special offerings.",
  ];
  
  const featuredTools = tools
    .filter((i, index) => (index < 5))

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
        <PageTemplate id="home-page">
          <Navbar />
          <ImageView
            path="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencealert.com%2Fimages%2F2019-05%2Fprocessed%2Fegyptian_beer_cover_unsplash_1024.jpg&f=1&nofb=1&ipt=9837ccdd5fffc07508d07d11550b2eb6748acaa42b9cb0e9d1f306561657d352&ipo=images"
            alt="Beer Cover Image"
          />
          <TitleView title="Bringing Brewers Together" />
          <SubtitleView text="Connect, share recipes, collaborate, and grow with a community of passionate microbreweries." />
          <ButtonActionView
            buttons={[
              {
                text: "Explore",
                isPrimary: true,
                action: handleExplore,
              },
            ]}
          />

          <SectionImage
            content={
              <Box>
                <Typography variant="subtitle1" component="h5" gutterBottom>
                  BeerHopper Features
                </Typography>
                <List>
                  {features.map((item) => (
                    <ListItem>{`• ${item}`}</ListItem>
                  ))}
                </List>
              </Box>
            }
            image={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F288%2F288712.jpg&f=1&nofb=1&ipt=a0424b6dd46990ef58a6222523afc4592b1ffbc608c9d027833c15430354c47c&ipo=images"
            }
            altImage={"Beer Image"}
            flipped={false}
          />
          <TitleView title="The community to share a beer!" />
          <SubtitleView text="Everything you need to get brewing today! Enjoy conversations with brewmasters and home brewers just like you!" />
          <ButtonActionView
            buttons={[
              {
                text: "Login",
                isPrimary: false,
                action: handleLogin,
              },
              {
                text: "Register",
                isPrimary: true,
                action: handleRegistration,
              },
            ]}
          />
          <SectionImage
            content={
              <Box>
                <Typography variant="subtitle1" component="h5" gutterBottom>
                  Included Tool Suite
                </Typography>
                <Typography variant="body2" component="h5" gutterBottom>
                  Check out some of the included tools we offer to get you
                  started! These are also available during your brew session
                  when working with various recipes!
                </Typography>
                {featuredTools.map((item) => (
                  <ListItem>
                    •<Link to={item.path}>{item.name}</Link>
                  </ListItem>
                ))}
              </Box>
            }
            image={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F288%2F288712.jpg&f=1&nofb=1&ipt=a0424b6dd46990ef58a6222523afc4592b1ffbc608c9d027833c15430354c47c&ipo=images"
            }
            altImage={"Beer Image"}
            flipped={true}
          />
          <TitleView title="The tools you need to get started!" />
          <SubtitleView text="Everything you need to get brewing today! Get started with a recipe and use our tools to make it your own!" />
          <ButtonActionView
            buttons={[
              {
                text: "View Tools",
                isPrimary: true,
                action: handleTools,
              },
            ]}
          />
          <Footer />
        </PageTemplate>
      </Suspense>
    </>
  );
}
