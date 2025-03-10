import "./App.css";
import { ThemeProvider } from "@mui/material";
import Router from "./router";
import { JSX } from "react";
import theme from "./components/Theme"

export default function App(): JSX.Element {
  return (
    <>
      <Router />
      <ThemeProvider theme={theme} />
    </>
  );
}
