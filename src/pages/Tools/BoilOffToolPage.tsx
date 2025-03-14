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
import BoilOffCalculatorImage from "../../assets/tool-icons/Boil-Off-Calculator.webp";

export default function BoilOffToolPage(): JSX.Element {
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
    name: "Boil-Off Calculator",
    description:
      "The Boil-Off Calculator is a crucial tool for brewers to determine the volume of wort that will evaporate during the boil. Knowing how much wort will boil off allows you to adjust your starting volume, ensuring you end up with the correct final volume for your recipe and fermentation vessel.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Precise Boil-Off Estimate",
        bodyText:
          "Calculate the volume of wort lost during the boil based on boil time and kettle surface area.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter your kettle volume, boil time, and boil intensity (low, medium, high).",
      },
      {
        boldText: "Boil-Off Rate Adjustment",
        bodyText:
          "Adjust for different brewing systems, from homebrewing kettles to larger setups.",
      },
      {
        boldText: "Real-Time Adjustments",
        bodyText:
          "See how changing boil time or boil intensity affects the final wort volume.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText: "Supports both metric and imperial measurements.",
      },
      {
        boldText: "Brewing Tips:",
        bodyText:
          "Recommendations for managing boil-off and compensating for evaporation during your brew day.",
      },
    ],
    closingSummary:
      "Ensure accurate batch size and avoid over- or under-cooking your wort with the Boil-Off Calculator! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={BoilOffCalculatorImage}/>
          <Box sx={{ margin: 2 }}>
            <TitleView title="Boil Off" />
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
