import { JSX, useState } from "react";
import NoteTextField from "./NoteTextField"; 
import fetchClient from "../../models/api/Client/fetchClient";
import { Box } from "@mui/material";

export default function ForumPostForm(): JSX.Element {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateAndSubmit = () => {
    console.log("Title:", formData.title);
    console.log("Content:", formData.content);
    handleSubmit()
  };

  const clearForm = () => {
    setFormData({ title: "", content: "" });
  };

  const handleSubmit = async () => {
    //   setErrorMessage("");
    try {
      const response = await fetchClient(`/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format");
      }

      const data = await response.json();
    } catch (error) {
      // setErrorMessage(
      //   "Login failed. Please check your credentials and try again."
      // );
    }
  };

  return (
    <Box
      component="form"
      onSubmit={validateAndSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
        gap: 2,
        mx: "auto",
        mt: 4,
      }}
    >
      <NoteTextField
        titlePlaceholder="Enter title"
        contentPlaceholder="Enter content"
        onClick={(title, content) => {
            setFormData({title, content})
            validateAndSubmit();
        }}
        clearForm={clearForm}
        titleUpdated={function (value: string): void {
          setFormData({ ...formData, title: value });
        }}
        contentUpdated={function (value: string): void {
          setFormData({ ...formData, content: value });
        }}
      />
    </Box>
  );
}
