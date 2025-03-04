import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Router from "./router";
import { JSX } from "react";

const theme = createTheme();

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      {
        <Router></Router>
      }
    </ThemeProvider>
  );
}
