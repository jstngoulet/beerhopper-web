import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { JSX } from "react";
import Spacer from "../common/Spacer";

export interface FeatureSummaryListItem {
  boldText: string;
  bodyText: string;
}

export interface FeatureSummaryCardProps {
  name: string;
  description: string;
  featureTitle: string;
  listItems: FeatureSummaryListItem[];
  closingSummary: string;
  calculator?: React.ReactNode;
}

export default function FeatureSummaryCard({
  name,
  description,
  featureTitle,
  listItems,
  closingSummary,
  calculator,
}: FeatureSummaryCardProps): JSX.Element {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
      }}
    >
      <Typography variant="subtitle1" component="h5" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {description}
      </Typography>
      <Spacer />
      <Typography variant="subtitle2" component="h6" gutterBottom>
        {featureTitle}
      </Typography>
      <List disablePadding>
        {listItems.map((item) => (
          <ListItem>
            <Typography variant="body1" component="p" gutterBottom>
              <Box component="b">{`${item.boldText}: `}</Box>
              {item.bodyText}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Spacer />
      <Typography variant="body1" component="p" gutterBottom>
        {closingSummary}
      </Typography>
      <Spacer />
      <Divider />
      <Spacer />
      {calculator}
      <Spacer />
    </Box>
  );
}
