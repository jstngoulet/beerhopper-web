import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface ItemListCardProps {
  id: string;
  imageSrc?: string;
  imageIcon?: React.ReactNode;
  title: string;
  caption?: string;
  onDetailsClick: () => void;
  isFilled?: boolean;
}

const ItemListCard: React.FC<ItemListCardProps> = ({
  id,
  imageSrc,
  imageIcon,
  title,
  caption,
  isFilled = false,
  onDetailsClick,
}) => {
  const imageSize = 35;
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        boxShadow: 0,
        borderColor: "primary.main",
        borderWidth: 1,
        borderStyle: "groove",
        borderRadius: 2,
        flexGrow: 1,
        cursor: "pointer",
        backgroundColor: isFilled ? "primary.main" : "transparent",
        color: isFilled ? "white" : "inherit",
      }}
      onClick={onDetailsClick}
    >
      {imageSrc ? (
        <CardMedia
          component="img"
          image={imageSrc}
          alt={title}
          sx={{
            width: imageSize,
            height: imageSize,
            borderRadius: 2,
            marginLeft: 1,
          }}
        />
      ) : (
        imageIcon && (
          <CardMedia
            component="div"
            sx={{
              width: imageSize,
              height: imageSize,
              borderRadius: 2,
              marginLeft: 1,
            }}
          >
            {imageIcon}
          </CardMedia>
        )
      )}
      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant={isFilled ? "body1" : "body2"}
          component="p"
          color={isFilled ? "inherit" : "text.secondary"}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "100%",
            fontWeight: isFilled ? "bold" : "normal",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant={isFilled ? "subtitle2" : "body1"}
          color={isFilled ? "inherit" : "text.secondary"}
        >
          {caption}
        </Typography>
      </CardContent>
      <Box sx={{ paddingRight: 1 }}>
        <IconButton>
          <ChevronRightIcon
            fontSize="small"
            sx={{ color: isFilled ? "white" : "text.secondary" }}
          />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ItemListCard;
