import React, { JSX, ReactNode } from "react";
import { Box, SxProps } from "@mui/material";

interface FullscreenImageProps {
  src: string;
  alt: string;
  children?: ReactNode;
  sx?: SxProps;
}

export default function FullscreenImage({
  src,
  alt,
  children,
  sx
}: FullscreenImageProps): JSX.Element {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          ...sx,
        }}
      />
      <Box
        sx={{
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
