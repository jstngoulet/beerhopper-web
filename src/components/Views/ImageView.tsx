import { Box } from "@mui/material";
import { JSX } from "react";

export interface ImageViewProps {
  path: string;
  alt: string;
  maxHeight?: number;
}

export default function ImageView({ path, alt, maxHeight }: ImageViewProps): JSX.Element {
  return (
    <Box>
      <img 
        src={path}
        alt={alt}
        style={{
            width: "100%",
            height: "auto",
            maxHeight: `${maxHeight ? maxHeight : 500}px`,
            objectFit: "cover"
        }}
      />
    </Box>
  );
}
