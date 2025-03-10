import { Box } from "@mui/material";
import { JSX } from "react";
import theme from "../Theme";

export interface SubtitleViewProps {
  text: string;
}

export default function SubtitleView({ text }: SubtitleViewProps): JSX.Element {
  return (
    <Box>
      <h2
        style={{
          justifyContent: "center",
          textAlign: "center",
          color: theme.palette.text.secondary,
          margin: "auto",
          maxWidth: "75%",
          padding: "0 1em 1em 0",
        }}
      >
        {text}
      </h2>
    </Box>
  );
}
