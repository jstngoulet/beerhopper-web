import "./App.css";
import { ThemeProvider } from "@mui/material";
import Router from "./router";
import { JSX } from "react";
import theme from "./components/Theme"
import { app } from "./plugins/firebase";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebase = app;

export default function App(): JSX.Element {
  return (
    <>
      <Router />
      <ThemeProvider theme={theme} />
    </>
  );
}
