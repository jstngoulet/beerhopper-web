import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import Spacer from "../common/Spacer";

export interface SimpleCardProps {
  iconPath: string;
  name: string;
  description: string;
  destination?: string;
}

export default function SimpleCard({
  iconPath,
  name,
  description,
  destination,
}: SimpleCardProps): React.JSX.Element {
  const isImageEmpty: boolean = iconPath.length === 0;
  const defaultToolImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lg3S3tLmLAOjdxJ0PP8g8gHaDo%26pid%3DApi%26h%3D160&f=1&ipt=9f9fa5f428b07122a985d6a8913c977695b6552be61d7259f8a0c6eccbbbdcbb&ipo=images";

  function handleClick() {
    window.location.href = destination ? destination : "#";
  }

  return (
    <div onClick={handleClick} style={{ height: "100%" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 120 + 15 + 15,  //  15 is the padding on top and bottom
              backgroundImage: `url(${
                !isImageEmpty ? iconPath : defaultToolImage
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(15px)", // Apply blur effect
              opacity: 0.5, // Adjust opacity to make it subtle
              zIndex: 0, // Make sure the background is underneath
            }}
          />
          <CardMedia
            component="img"
            image={!isImageEmpty ? iconPath : defaultToolImage}
            alt={name}
            sx={{
              width: 120, // Icon size
              height: 120, // Icon size
              borderRadius: 1, // Rounded corners for app icon look
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)", // Subtle shadow for floating effect
              objectFit: "cover",
              margin: "15px",
              zIndex: 1
            }}
          />
          <Spacer />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="subtitle1" component="div">
              {name}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
