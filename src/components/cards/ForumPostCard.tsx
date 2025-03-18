import {
  CardContent,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { ThumbUp, ThumbDown, ChatBubbleOutline } from "@mui/icons-material";
import theme from "../Theme";
import DashboardCard from "./DashboardElementCard";
import fetchClient from "../../models/api/Client/fetchClient";

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  commentsCount: number;
  comments: ForumPostComment[]
}

export interface ForumPostComment {
    id: string;
    dateUpdated: string;
    dateCreated: string;
    content: string;
}

export default function ForumPostCard({
  id,
  title,
  content,
  likes,
  dislikes,
  commentsCount,
  comments
}: ForumPost) {
//   const [isLiked, setLiked] = useState<boolean>(false);
//   const [isDisliked, setDisliked] = useState<boolean>(false);

  const likePost = () => {
    fetchClient(`/posts/${id}/like`, {
      method: "POST",
      body: JSON.stringify({
        type: "LIKE",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(`Liked Response: ${JSON.stringify(result)}}`);
        // setLiked(true);
        // setPopularPosts(result.data);
      })
      .catch((error) => console.error("Error Liking Post:", error));
  };

  const dislikePost = () => {
    fetchClient(`/posts/${id}/like`, {
      method: "POST",
      body: JSON.stringify({
        type: "DISLIKE",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(`Disliked Response: ${JSON.stringify(result)}`);
        // setDisliked(true);
        // setPopularPosts(result.data);
      })
      .catch((error) => console.error("Error Liking Post:", error));
  };

  return (
    <DashboardCard key={id}>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Divider />
        <Typography variant="body1" mt={2}>
          {content}
        </Typography>
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <IconButton
            color="primary"
            sx={{ fontSize: 18, color: theme.palette.text.primary }}
            disableRipple
            onClick={likePost}
          >
            <ThumbUp fontSize="inherit" />
            <Typography variant="body2" ml={0.5}>
              {likes}
            </Typography>
          </IconButton>
          <IconButton
            color="primary"
            sx={{ fontSize: 18, color: theme.palette.text.primary }}
            disableRipple
            onClick={dislikePost}
          >
            <ThumbDown fontSize="inherit" />
            <Typography variant="body2" ml={0.5}>
              {dislikes}
            </Typography>
          </IconButton>
          <IconButton
            sx={{ fontSize: 18, color: theme.palette.text.primary }}
            disableRipple
          >
            <ChatBubbleOutline fontSize="inherit" />
            <Typography variant="body2" ml={0.5}>
              {commentsCount} Comments
            </Typography>
          </IconButton>
        </Box>
      </CardContent>
      {commentsCount > 0 && (
        <>
          {comments.map((item) => (
            <Box>{item.content}</Box>
          ))}
        </>
      )}
    </DashboardCard>
  );
}
