import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

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
          <CardMedia
            component="img"
            height={140}
            image={!isImageEmpty ? iconPath : defaultToolImage}
            alt={name}
            sx={{
              objectFit: "contain",
            }}
          />
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
