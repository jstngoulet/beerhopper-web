import { Grid2 as Grid, Typography, IconButton, Collapse } from "@mui/material";
import React, { JSX } from "react";
import theme from "../Theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export interface CollapsableViewProps {
    title: string;
    content: React.ReactNode;
    open: boolean;
}

export default function CollapsableView({
    title, 
    content,
    open = false,
}: CollapsableViewProps): JSX.Element {
    
    const [isOpen, setOpen] = React.useState<boolean>(open);
    
    const handleToggle = () => {
        setOpen(!isOpen)
    }
    
    return (
      <>
        <Grid
          container
          columns={2}
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2" component="h6" gutterBottom>
            {title}
          </Typography>
          <IconButton
            onClick={handleToggle}
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Grid>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {content}
        </Collapse>
      </>
    );
    
}