import { Box } from "@mui/material";
import { JSX } from "react";
import theme from "../Theme";

export interface TitleViewProps {
  title: string;
}

export default function TitleView({ title }: TitleViewProps): JSX.Element {
  return (
    <Box>
      <h1
        style={{
          justifyContent: "center",
          textAlign: "center",
          color: theme.palette.text.primary,
          margin: "auto",
          maxWidth: "75%",
          padding: "1em"
        }}
      >
        {title}
      </h1>
    </Box>
  );
}
