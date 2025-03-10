import { Button, Grid2 as Grid } from "@mui/material";
import { JSX } from "react";
import theme from "../Theme";

export interface ButtonProps {
  text: string;
  isPrimary: boolean;
  action: () => void;
}

export interface ButtonActionViewProps {
  buttons: ButtonProps[];
}

export default function ButtonActionView({
  buttons,
}: ButtonActionViewProps): JSX.Element {
  const createdButtons = buttons.map((btn) => (
    <Grid>
        <Button
          variant={btn.isPrimary ? "contained" : "outlined"}
          onClick={btn.action}
          color="primary"
          key={btn.text}
          style={{
            minWidth: "250px",
          }}
        >
          {btn.text}
        </Button>
    </Grid>
  ));

  return (
    <div
      style={{
        justifyContent: "center",
        margin: "auto",
        maxWidth: "75%",
      }}
    >
      <Grid
        container
        padding={1}
        direction="row"
        justifyContent={"center"}
        spacing={5}
      >
        {createdButtons}
      </Grid>
    </div>
  );
}
