import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import fetchClient from "../../models/api/Client/fetchClient";
import { setAuthorization } from "../../models/api/Auth-Helpers";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setErrorMessage("");
    try {
      const response = await fetchClient(
        `/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format");
      }

      const data = await response.json();
      setAuthorization(data.id_token);
      window.location.href = "/explore";
    } catch (error) {
      setErrorMessage(
        "Login failed. Please check your credentials and try again."
      );
    }
  };

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        padding: 4,
        width: "40%",
        minWidth: 300,
        maxWidth: 500,
        flexGrow: 0.5,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        label="Email"
        name="email"
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Paper>
  );
};


export { LoginForm };
