import { useState, useEffect } from "react";
import { Typography, Grid2 } from "@mui/material";
import fetchClient from "../../models/api/Client/fetchClient";
import ForumPostCard, { ForumPost } from "../cards/ForumPostCard";
import DashboardCard from "../cards/DashboardElementCard";
import PopularPostsCard from "../cards/PopularPostsCard";

export default function ForumDashboardView() {
  const [posts, setPosts] = useState<ForumPost[]>([]);

  useEffect(() => {
    fetchClient("/posts")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result.data);
      })
      .catch((error) => console.error("Error fetching Posts:", error));
  }, []);

  return (
    <Grid2 container spacing={2} mt={1}>
      <DashboardCard sx={{ m: 2 }}>
        <PopularPostsCard />
      </DashboardCard>
      {posts.length === 0 ? (
        <Typography>Loading posts...</Typography>
      ) : (
        posts.map((post) => (
          <ForumPostCard
            id={post.id}
            title={post.title}
            content={post.content}
            likes={post.likes}
            dislikes={post.dislikes}
            commentsCount={post.commentsCount}
            comments={post.comments}
          />
        ))
      )}
    </Grid2>
  );
}
