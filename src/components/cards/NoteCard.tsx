import { Box } from "@mui/material";
import { JSX } from "react";
import theme from "../Theme";

export interface NoteCardProps {
  content: JSX.Element;
}

export default function NoteCard({
  content,
}: NoteCardProps): JSX.Element {
  return (
    <Box
      sx={{
        flexGrow: 1,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 1, 
        padding: 2,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      }}
    >
      {content}
    </Box>
  );
}