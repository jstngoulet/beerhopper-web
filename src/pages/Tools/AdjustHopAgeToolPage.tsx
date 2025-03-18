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
import HopAgeCalculatorImage from "../../assets/tool-icons/Hop-Age-Calculator.webp";

export default function AdjustHopAgeToolPage(): JSX.Element {
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
    name: "Hop Age Calculator",
    description:
      "The Hop Age Calculator is a vital tool for brewers looking to assess the freshness and potency of their hops. Over time, hops lose alpha acids and aromatic compounds, which can significantly impact bitterness and flavor. This calculator helps you accurately estimate the remaining alpha acid percentage based on storage conditions and age.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Alpha Acid Degradation",
        bodyText:
          "Calculate the remaining alpha acid percentage based on storage time and temperature.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter the original alpha acid content, storage temperature, and hop age.",
      },
      {
        boldText: "Storage Factor Adjustment",
        bodyText: "Account for vacuum-sealed or oxygen-exposed hops.",
      },
      {
        boldText: "Accurate IBU Predictions",
        bodyText:
          "Adjust your recipes to maintain consistent bitterness despite aging hops.",
      },
      {
        boldText: "Useful Tips",
        bodyText:
          "Learn best practices for storing hops to preserve freshness.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText:
          "Supports alpha acid content in both percentage and IBU calculations.",
      },
    ],
    closingSummary:
      "Maintain consistent bitterness and flavor profiles in your brews with the Hop Age Calculator! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={HopAgeCalculatorImage} />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Hop Age" />
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
