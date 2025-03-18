import { JSX, ReactNode } from "react";
import { Card, BoxProps } from "@mui/material";
import theme from "../Theme";

interface DashboardCardProps extends BoxProps {
  children?: ReactNode;
}

export default function DashboardCard({
  children,
  ...props
}: DashboardCardProps): JSX.Element {
  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        borderStyle: "groove",
        boxShadow: 0,
        padding: 1,
        flexGrow: 1,
        width: "100%",
        ...props
      }}
    >
      {children}
    </Card>
  );
}
