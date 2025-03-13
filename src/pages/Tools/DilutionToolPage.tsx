import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import ToolWrapperPageTemplate from "./ToolWrapperPage";
import ImageView from "../../components/Views/ImageView";
import TitleView from "../../components/Views/TitleView";
import { Box, List, ListItem, Typography } from "@mui/material";
import SplitContentNoteView from "../../components/Views/SplitContentNoteView";
import { NoteCardProps } from "../../components/cards/NoteCard";
import FeatureSummaryCard, {
  FeatureSummaryCardProps,
} from "../../components/cards/FeatureSummaryCard";

export default function DilutionToolPage(): JSX.Element {
  const note: NoteCardProps = {
    content: (
      <Box>
        <Typography variant="subtitle2" component="h5" gutterBottom>
          Just a note:
        </Typography>
        <List disablePadding>
          <ListItem>• Always wear your seat belt</ListItem>
          <ListItem>• Don't let her drive</ListItem>
          <ListItem>• Navigate before you leave the house</ListItem>
          <ListItem>• Always wear protection</ListItem>
        </List>
      </Box>
    ),
  };

  // const toolInfo: FeatureSummaryCardProps = {
  //   name: "",
  //   description: "",
  //   featureTitle: "",
  //   listItems: [
  //     {
  //         boldText: "",
  //         bodyText: ""
  //     }
  //   ],
  //   closingSummary: "",
  // };

  const toolInfo: FeatureSummaryCardProps = {
    name: "Dilution Calculator",
    description:
      "The Dilution Calculator is an essential tool for brewers, meadmakers, and winemakers who need to adjust the strength or concentration of their beverages. Whether you're adjusting your wort to reach the desired original gravity or diluting a high-alcohol beverage to a more balanced level, this tool helps you calculate exactly how much water (or other liquid) to add.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Precise Dilution Calculations",
        bodyText:
          "Determine the exact amount of water or other liquids to add to achieve your target specific gravity or alcohol content.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter your current gravity (OG or FG), target gravity, and batch size for tailored dilution calculations.",
      },
      {
        boldText: "Alcohol Content Adjustment",
        bodyText:
          "For high-gravity brews or high-alcohol meads/wines, calculate how to dilute to achieve a desired ABV.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText:
          "Supports both metric and imperial measurements, including volume and gravity scales.",
      },
      {
        boldText: "Real-Time Adjustments",
        bodyText:
          "Instantly see how different dilution amounts will impact the final gravity and alcohol level of your beverage.",
      },
      {
        boldText: "Brewing Tips",
        bodyText:
          "Suggestions on when dilution is necessary and how to prevent unwanted dilution of flavor or body.",
      },
    ],
    closingSummary:
      "Achieve the perfect strength and balance in your beverages with the Dilution Calculator! 🍻🍷🍯",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageView
            path="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencealert.com%2Fimages%2F2019-05%2Fprocessed%2Fegyptian_beer_cover_unsplash_1024.jpg&f=1&nofb=1&ipt=9837ccdd5fffc07508d07d11550b2eb6748acaa42b9cb0e9d1f306561657d352&ipo=images"
            alt="Beer Cover Image"
            maxHeight={250}
          />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Dilution" />
            {/**
             * Should have the following elements:
             * • Type (Initi Strike vs Step Infusion)
             * • Target Step Temp (F)
             * • Current Temp (F)
             * • Grain Weight (lb)
             * • Mash Tun weight (lb)
             * • Tun Specific Heat (cal/c-G) (should have helper text)
             * • Vol of water to add (qt)
             * • Usage Notes
             */}
            <SplitContentNoteView
              content={
                <FeatureSummaryCard
                  name={toolInfo.name}
                  description={toolInfo.description}
                  featureTitle={toolInfo.featureTitle}
                  listItems={toolInfo.listItems}
                  closingSummary={toolInfo.closingSummary}
                />
              }
              flipped={false}
              note={note}
            />
          </Box>
        </ToolWrapperPageTemplate>
      </Suspense>
    </>
  );
}
