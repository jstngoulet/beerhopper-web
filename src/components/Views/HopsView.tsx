import React, { JSX, useEffect, useState } from "react";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import ItemList from "../cards/ItemList";
import ExploreSection from "../common/ExploreSection";
import Spacer from "../common/Spacer";
import theme from "../Theme";
import { useNavigate } from "react-router-dom";
import Hop from "../../models/api/Models/Hop";
import HopIcon from "../../assets/CellIcons/Default-Hop-Icon.webp";

export default function HopsView(): JSX.Element {
  const API_ENDPOINT = process.env.REACT_APP_API_SERVER_HOST || "";
  const [hopsList, setHopsList] = useState<Hop[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const navigate = useNavigate();

  const openHops = () => {
    navigate("/ingredients/hops");
  };

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

  useEffect(() => {
    if (isLoaded) return;
    
    fetch(`${API_ENDPOINT}/hops`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer YOUR_API_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHopsList(data);
        setIsLoaded(!isLoaded);
      })
      .catch((error) => console.error("Error fetching Hops:", error));
  }, [API_ENDPOINT, isLoaded]);

  return (
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
}
