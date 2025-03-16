import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface RegistrationFormProps {}

export const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!acceptedTerms) return;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_SERVER_HOST}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Server error: ${response.status}`);
      }

      console.log("Registration successful:", data);
      localStorage.setItem("token", data.token);
      navigate("/explore");
    } catch (error) {
      console.error("Registration failed:", error);
      const errorMessage =
        error instanceof Error
          ? `Could not create user at this time: ${error.message}`
          : "Registration failed. Please try again.";
      setErrorMessage(errorMessage);
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
        flexGrow: 0.5,
        width: "40%",
        minWidth: 300,
        maxWidth: 500,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
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
      <TextField
        fullWidth
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
        }
        label={
          <Typography variant="body2">
            I accept the{" "}
            <Link href="#" underline="hover">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        }
      />
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        disabled={!acceptedTerms}
        onClick={handleSubmit}
      >
        Register
      </Button>
    </Paper>
  );
};