import React, { JSX, useEffect, useState } from "react";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import ItemList from "../cards/ItemList";
import ExploreSection from "../common/ExploreSection";
import Spacer from "../common/Spacer";
import theme from "../Theme";
import { useNavigate } from "react-router-dom";
import YeastIcon from "../../assets/CellIcons/Default-Yeast-Icon.webp";
import Yeast from "../../models/api/Models/Yeast";

export default function YeastView(): JSX.Element {
  const API_ENDPOINT = process.env.REACT_APP_API_SERVER_HOST || "";
  const [yeastList, setYeastList] = useState<Yeast[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const navigate = useNavigate();

  const openYeasts = () => {
    navigate("/ingredients/yeasts");
  };

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

  useEffect(() => {
    if (isLoaded) return;
    
    fetch(`${API_ENDPOINT}/yeasts`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer YOUR_API_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setYeastList(data);
        setIsLoaded(!isLoaded);
      })
      .catch((error) => console.error("Error fetching Yeasts:", error));
  }, [API_ENDPOINT, isLoaded]);

  return (
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
                borderRadius: 2,
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
}
