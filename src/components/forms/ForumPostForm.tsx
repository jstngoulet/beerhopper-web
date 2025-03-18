import { JSX, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import ExploreSection from "../common/ExploreSection";
import fetchClient from "../../models/api/Client/fetchClient";
import theme from "../Theme";

export default function ForumPostForm(): JSX.Element {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [errors, setErrors] = useState<{
    title?: string;
    content?: string;
    serverError?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors: { title?: string; content?: string } = {};
    if (!formData.title.trim()) tempErrors.title = "Title is required";
    if (!formData.content.trim()) tempErrors.content = "Content is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({serverError: undefined})
    
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const response = await fetchClient("/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit");
      setFormData({ title: "", content: "" }); // Clear form on success
    } catch (error) {
      setErrors({
        serverError:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ExploreSection
      title="Submit a Question"
      content={
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mx: "auto",
            mt: 2,
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
          />
          <TextField
            label="Content"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            error={!!errors.content}
            helperText={errors.content}
          />
          {errors.serverError && (
            <Typography color={theme.palette.error.main} variant="body2">
              {errors.serverError}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting || !formData.content || !formData.title}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      }
    />
  );
}
