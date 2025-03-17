import React, { JSX, useEffect, useState } from "react";
import Grain from "../../models/api/Models/Grain";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import ItemList from "../cards/ItemList";
import ExploreSection from "../common/ExploreSection";
import Spacer from "../common/Spacer";
import theme from "../Theme";
import { useNavigate } from "react-router-dom";
import GrainIcon from "../../assets/CellIcons/Default-Grain-Icon.webp";

export default function GrainView(): JSX.Element {
  const API_ENDPOINT = process.env.REACT_APP_API_SERVER_HOST || "";
  const [grainsList, setGrainsList] = useState<Grain[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const navigate = useNavigate();

  const openGrains = () => {
    navigate("/ingredients/grains");
  };

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

  useEffect(() => {
    if (isLoaded) return;

    fetch(`${API_ENDPOINT}/grains`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer YOUR_API_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGrainsList(data);
        setIsLoaded(!isLoaded);
      })
      .catch((error) => console.error("Error fetching Grains:", error));
  }, [API_ENDPOINT, isLoaded]);

  return (
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
              imageSrc: item.iconPath ? item.iconPath : GrainIcon,
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
}
