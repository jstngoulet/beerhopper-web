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

import YeastStarterCalculatorImage from "../../assets/tool-icons/Yeast-Starter-Calculator.webp";
import ImageBlurView from "../../components/Views/ImageBlurView";

export default function YeastStarterToolPage(): JSX.Element {
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
    name: "Yeast Starter Calculator",
    description:
      "The Yeast Starter Calculator is an invaluable tool for brewers looking to build healthy, vigorous yeast cell counts before pitching. Proper yeast propagation ensures strong fermentation, reduces lag time, and improves the overall quality of your beer—especially for high-gravity brews or lagers.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Pitch Rate Precision",
        bodyText:
          "Calculate the optimal starter size based on wort volume, gravity, and yeast strain.",
      },
      {
        boldText: "Growth Prediction",
        bodyText:
          "Estimate cell count increase based on starter volume and aeration method.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter original gravity, batch size, yeast viability, and starter method (shaken, stirred, or stir plate).",
      },
      {
        boldText: "Step-Up Starters",
        bodyText: "Plan multi-step starters for large or high-gravity batches.",
      },
      {
        boldText: "Simple Instructions",
        bodyText:
          "Clear guidance on how to create and manage your starter for peak yeast health.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText: "Supports both metric and imperial measurements.",
      },
    ],
    closingSummary:
      "Brew confidently with healthy yeast every time using the Yeast Starter Calculator! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={YeastStarterCalculatorImage} imageDescription="" />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Yeast Starter" />
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
