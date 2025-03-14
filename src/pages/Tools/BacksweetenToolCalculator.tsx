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
import BacksweeteningCalculatorImage from "../../assets/tool-icons/Backsweetening-Calculator.webp";

export default function BacksweetenAgeToolPage(): JSX.Element {
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
    name: "Backsweetening Calculator",
    description:
      "The Backsweetening Calculator is an essential tool for brewers and mead makers looking to adjust the sweetness of their beverages after fermentation. Whether you’re creating a sweeter mead, cider, beer, or wine, this tool helps you calculate the exact amount of sugar or sweetener needed to reach your desired sweetness level without over-sweetening.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Precise Sweetener Calculation",
        bodyText:
          "Determine the amount of sugar (such as honey, cane sugar, or fruit juice) or artificial sweetener to add based on your desired final sweetness.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter current final gravity (FG), target sweetness level, beverage volume, and sweetener type.",
      },
      {
        boldText: "Conversion Support",
        bodyText:
          "Choose between different sweeteners and get accurate conversion rates (e.g., how much honey equals a teaspoon of sugar).",
      },
      {
        boldText: "Real-Time Adjustments",
        bodyText:
          "Instantly see how different amounts of sugar or sweeteners will affect the overall flavor and balance.",
      },
      {
        boldText: "Optional Stabilization Tips",
        bodyText:
          "Learn how to stabilize your beverage to prevent further fermentation after backsweetening, including the use of potassium sorbate or sulfur dioxide.",
      },
    ],
    closingSummary:
      "Achieve the perfect balance of sweetness in your post-fermentation beverage with the Backsweetening Calculator! 🍻🍯",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
         <ImageBlurView image={BacksweeteningCalculatorImage} />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Backsweeten" />
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
