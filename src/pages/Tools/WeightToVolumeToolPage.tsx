import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import ToolWrapperPageTemplate from "./ToolWrapperPage";
import TitleView from "../../components/Views/TitleView";
import { Box, List, ListItem, Typography } from "@mui/material";
import SplitContentNoteView from "../../components/Views/SplitContentNoteView";
import { NoteCardProps } from "../../components/cards/NoteCard";
import FeatureSummaryCard, {
  FeatureSummaryCardProps,
} from "../../components/cards/FeatureSummaryCard";

import ImageBlurView from "../../components/Views/ImageBlurView";
import WeightToVolumeToolImage from "../../assets/tool-icons/Weight-To-Volume-Calculator.webp";

export default function WeightToVolumeToolPage(): JSX.Element {
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
    name: "Weight to Volume Calculator",
    description:
      "The Weight to Volume Calculator is a must-have tool for brewers, meadmakers, and winemakers who need to convert ingredients from weight measurements (such as grams, ounces, or pounds) to volume measurements (like milliliters, liters, or gallons). This tool ensures accuracy when adding ingredients like honey, sugars, grains, or hops, which can vary in density.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Precise Conversion",
        bodyText:
          "Convert weights to volume (or vice versa) based on the ingredient’s density, allowing for accurate ingredient measurements.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter the weight of the ingredient (in your preferred unit) and select the ingredient type for an accurate conversion (e.g., honey, malt, or hops).",
      },
      {
        boldText: "Ingredient Database",
        bodyText:
          "Includes common brewing ingredients with preset density values, such as malt, honey, and hops, or allows you to input your own density for custom ingredients.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText:
          "Supports both metric and imperial measurements, including ounces, grams, pounds, milliliters, liters, and gallons.",
      },
      {
        boldText: "Real-Time Calculations",
        bodyText:
          "Instantly calculate the volume from a given weight or the weight from a given volume for easy ingredient handling.",
      },
    ],
    closingSummary:
      "Achieve accurate ingredient measurements with ease using the Weight to Volume Calculator! 🍻🍷🍯",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={WeightToVolumeToolImage} />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Weight to Volume" />
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
