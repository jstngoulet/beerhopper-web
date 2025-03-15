import { Box, Grid2 as Grid } from "@mui/material";
import { JSX } from "react";

export interface SectionImageProps {
  content: JSX.Element;
  image: string;
  altImage: string;
  flipped: boolean;
}

export default function SectionImage({
  content,
  image,
  altImage,
  flipped,
}: SectionImageProps): JSX.Element {
  if (flipped) {
    return (
      <Grid
        container
        size={2}
        spacing={5}
        columns={{xs: 1,md: 2}}
        paddingTop={5}
        paddingBottom={5}
      >
        <Grid size={1}>
          <Box padding={5}>{content}</Box>
        </Grid>
        <Grid size={1}>
          <img
            src={image}
            alt={altImage}
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      size={2}
      spacing={5}
      columns={{ xs: 1, md: 2 }}
      paddingTop={5}
      paddingBottom={5}
    >
      <Grid size={1}>
        <img
          src={image}
          alt={altImage}
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
      </Grid>

      <Grid size={1}>
        <Box padding={5}>{content}</Box>
      </Grid>
    </Grid>
  );
}
