import { Box, SxProps, Typography } from "@mui/material";
import { JSX } from "react";
import theme from "../Theme";

export interface ExploreSectionProps {
  title: string;
  content?: React.ReactNode;
  sx?: SxProps;
}

export default function ExploreSection({
  title,
  content,
  sx
}: ExploreSectionProps): JSX.Element {
  return (
    <Box
      sx={{
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        borderStyle: "groove",
        padding: 2,
        ...sx
      }}
    >
      <Typography
        variant="subtitle2"
        component="h6"
        color={theme.palette.text.primary}
      >
        {title}
      </Typography>
      {content}
    </Box>
  );
}
