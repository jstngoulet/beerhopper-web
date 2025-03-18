import React, { JSX, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ItemList from "../cards/ItemList";
import Spacer from "../common/Spacer";
import theme from "../Theme";
import PostIcon from "../../assets/CellIcons/Forum-Post-Icon.webp";
import fetchClient from "../../models/api/Client/fetchClient";
import { ForumPost } from "./ForumPostCard";

export default function PopularPostsCard(): JSX.Element {
  const API_ENDPOINT = process.env.REACT_APP_API_SERVER_HOST || "";
  const [popularPosts, setPopularPosts] = useState<ForumPost[]>([]);
//   const [isLoaded, setIsLoaded] = useState<boolean>(false);
//   const navigate = useNavigate();

  useEffect(() => {
    
    fetchClient("/posts/popular/recent")
      .then((response) => response.json())
      .then((result) => {
        setPopularPosts(result.data);
      })
      .catch((error) => console.error("Error fetching Popular Posts:", error));
  }, [API_ENDPOINT]);

  return (
    <Box padding={1}>
      <Typography
        variant="subtitle2"
        component="h6"
        color={theme.palette.text.primary}
        mb={1}
      >
        Popular Posts
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color={theme.palette.text.primary}
      >
        Quickly access our most popular actions by browsing by category! Or, if
        you are ready to start brewing, pick find a reciepe from our marketplace
        and start your brew day!
      </Typography>
      <Spacer />
      <ItemList
      columnOverride={1}
        items={popularPosts.slice(0, 6).map((item) => ({
          title: item.title,
          imageSrc: PostIcon,
          caption: item.content,
          id: item.id,
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
          //   onClick={openYeasts}
        >
          <Typography variant={"body1"} color={"text.secondary"}>
            View Popular Posts
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
