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
import SulfiteAdditionCalculatorImage from "../../assets/tool-icons/Sulfite-Addition-Calculator.webp";

export default function SulfiteToolPage(): JSX.Element {
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
    name: "Sulfite Addition Calculator",
    description:
      "The Sulfite Addition Calculator is a crucial tool for winemakers, meadmakers, and brewers who want to properly stabilize their beverages. This tool helps you determine the precise amount of potassium metabisulfite (or sodium metabisulfite) needed to prevent oxidation, spoilage, and unwanted microbial growth while maintaining the flavor integrity of your product.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Precise Sulfite Calculation",
        bodyText:
          "Determine the correct amount of sulfite to add based on batch size and desired free SO₂ concentration.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter the batch size, current free SO₂ levels (if known), and the desired target level of free SO₂.",
      },
      {
        boldText: "Sulfur Sensitivity",
        bodyText:
          "Get recommendations for adjusting sulfite levels based on the specific needs of wine, mead, or beer.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText: "Supports both metric and imperial measurements.",
      },
      {
        boldText: "Real-Time Results",
        bodyText:
          "Instantly calculate the sulfite addition required to achieve desired levels of stabilization.",
      },
      {
        boldText: "Best Practices",
        bodyText:
          "Learn proper sulfite handling, including when and how to add it without negatively affecting your beverage’s taste.",
      },
    ],
    closingSummary:
      "Ensure a clean, stable fermentation and prevent oxidation with the Sulfite Addition Calculator! 🍷🍯🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={SulfiteAdditionCalculatorImage} />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Sulfite Additon" />
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
