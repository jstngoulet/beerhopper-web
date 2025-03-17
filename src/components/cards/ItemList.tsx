import React, { JSX } from "react";
import ItemListCard, { ItemListCardProps } from "./ItemListCard";
import { Grid2 } from "@mui/material";

export interface ItemListProps {
  items: ItemListCardProps[];
}

export default function ItemList({ items }: ItemListProps): JSX.Element {
  return (
    <Grid2 container spacing={1} columns={{xs: 1, sm: 2, md: 2, xl: 3}}>
      {items.map((item) => (
        <Grid2
        //   columns={{xs: 1, sm: 2, md: 2, lg: 3}}
          key={item.id}
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
          }}
          size={1}
          spacing={1}
        >
          <ItemListCard
            id={item.id}
            imageSrc={item.imageSrc}
            imageIcon={item.imageIcon}
            title={item.title}
            caption={item.caption}
            isFilled={item.isFilled}
            onDetailsClick={() => item.onDetailsClick()}
          />
        </Grid2>
      ))}
    </Grid2>
  );
}
