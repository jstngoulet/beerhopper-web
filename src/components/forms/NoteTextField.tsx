import { Box, Button, TextField } from "@mui/material";
import ExploreSection from "../common/ExploreSection";
import { useState } from "react";

interface NoteTextFieldProps {
  titlePlaceholder: string;
  contentPlaceholder: string;
  titleUpdated: (value: string) => void;
  contentUpdated: (value: string) => void;
  clearForm: () => void;
  onClick: (title: string, content: string) => void;
}

export default function NoteTextField({
  titlePlaceholder,
  contentPlaceholder,
  titleUpdated,
  contentUpdated,
  clearForm,
  onClick,
}: NoteTextFieldProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  
  return (
    <ExploreSection
      title="Note"
      content={
        <Box
          mt={2}
          gap={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label={titlePlaceholder}
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
              titleUpdated(e.target.value);  
            }}
          />
          <TextField
            label={contentPlaceholder}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => {
                setContent(e.target.value)
                contentUpdated(e.target.value)
            }}
          />
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => 
            {
                onClick(title, content);
                setContent("");
                setTitle("");
            }
            }
            disabled={!title || !content}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={() => {
                clearForm();
                setTitle("");
                setContent("");
            }}
          >
            Clear
          </Button>
        </Box>
      }
    />
  );
}
