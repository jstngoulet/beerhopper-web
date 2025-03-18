import React, { JSX } from "react";
import ItemListCard, { ItemListCardProps } from "./ItemListCard";
import { Breakpoint, Grid2 } from "@mui/material";

type ResponsiveStyleValue<T> = T | Array<T | null> | {
    [key in Breakpoint]?: T | null;
};
export interface ItemListProps {
  items: ItemListCardProps[];
  columnOverride?: ResponsiveStyleValue<number>;
}

export default function ItemList({ items, columnOverride }: ItemListProps): JSX.Element {
  return (
    <Grid2 container spacing={1} columns={columnOverride || {xs: 1, sm: 2, md: 2, xl: 3}}>
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
