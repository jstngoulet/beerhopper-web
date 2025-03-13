import { Box, CardMedia } from "@mui/material";
import { JSX } from "react";

export interface ImageBlurViewProps {
  image: string;
  imageDescription?: string;
}

export default function ImageBlurView({
  image,
  imageDescription,
}: ImageBlurViewProps): JSX.Element {
    
  const backgroundHeight = 250;
  const imageHeight = 150;
  const imagePadding = 15;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: backgroundHeight,
      }}
    >
      {/* Blurred Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: backgroundHeight,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(25px)",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      {/* Foreground Image */}
      <CardMedia
        component="img"
        image={image}
        alt={imageDescription}
        sx={{
          width: imageHeight, // Icon size
          height: imageHeight, // Icon size
          borderRadius: 1, // Rounded corners for app icon look
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          objectFit: "cover",
          margin: `${imagePadding}px`,
          zIndex: 1,
        }}
      />
    </Box>
  );
}
