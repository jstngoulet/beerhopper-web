import { Box, Grid2 as Grid, Paper } from "@mui/material";
import { JSX } from "react";
import NoteCard, { NoteCardProps } from "../cards/NoteCard";

export interface SplitContentNoteViewProps {
  content: JSX.Element;
  flipped: boolean;
  note: NoteCardProps;
}

export default function SplitContentNoteView({
  content,
  flipped,
  note,
}: SplitContentNoteViewProps): JSX.Element {
  return (
    <Box>
      <Grid
        container
        columns={{ xs: 1, md: 8 }}
        spacing={2}
        justifyContent={"center"}
      >
        <Grid size={4}>
          <Paper
            sx={{
              padding: 1,
            }}
          >
            {content}
          </Paper>
        </Grid>
        <Grid size={2}>
          <Box>
            <NoteCard content={note.content} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
