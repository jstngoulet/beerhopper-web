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

import MashPhCalculatorImage from "../../assets/tool-icons/Mash-Ph-Calculator.webp";
import ImageBlurView from "../../components/Views/ImageBlurView";

export default function MashPhToolPage(): JSX.Element {
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
    name: "Mash pH Calculator",
    description:
      "The Mash pH Calculator is an essential tool for brewers aiming to achieve optimal enzyme activity and flavor profile by accurately predicting and adjusting mash pH. Maintaining the right mash pH (typically between 5.2 and 5.6) is crucial for proper starch conversion and balanced beer flavor.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Accurate pH Prediction",
        bodyText:
          "Estimate mash pH based on grain bill composition, water chemistry, and additives.",
      },
      {
        boldText: "Adjustment Recommendations",
        bodyText:
          "Get precise additions of acids (like lactic or phosphoric) or brewing salts (like gypsum or calcium chloride) to hit your target pH.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter water profile, grain bill, and any pre-treatment additions.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText: "Supports both metric and imperial measurements.",
      },
      {
        boldText: "Real-Time Results",
        bodyText: "Instantly see how adjustments will affect your mash pH.",
      },
      {
        boldText: "Expert Tips",
        bodyText:
          "Guidance on common acid and salt choices for different beer styles.",
      },
    ],
    closingSummary:
      "Achieve the perfect mash pH for a clean, balanced brew with the Mash pH Calculator! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={MashPhCalculatorImage} imageDescription="" />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Mash pH" />
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
