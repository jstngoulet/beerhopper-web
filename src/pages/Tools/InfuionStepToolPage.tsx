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
import InfusionStepImage from "../../assets/tool-icons/Infusion-Step-Calculator.webp";

export default function InfusionStepToolPage(): JSX.Element {
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

  //   const toolInfo: FeatureSummaryCardProps = {
  //     name: "",
  //     description: "",
  //     featureTitle: "",
  //     listItems: [],
  //     closingSummary: "",
  //   };

  const toolInfo: FeatureSummaryCardProps = {
    name: "Infusion Temperature Calculator",
    description:
      "The Infusion Temperature Calculator is an essential tool for brewers looking to achieve precise mash temperatures when adding hot water to their grain bed. Whether you’re performing a step mash or correcting a mash that’s too cool, this calculator ensures you hit your target temperature every time.",
    featureTitle: "Features:",
    listItems: [
      {
        boldText: "Accurate Calculations",
        bodyText:
          "Determine the temperature of the infusion water needed to reach your desired mash temperature.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter your current mash temperature, target temperature, mash volume, and grain weight.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText: "Supports both Celsius and Fahrenheit for global usability.",
      },
      {
        boldText: "Efficiency Tips",
        bodyText:
          "Get recommendations on water-to-grain ratios for optimal heat distribution.",
      },
      {
        boldText: "Save Your Settings",
        bodyText:
          "Quickly recall your most common mash profiles for future brews.",
      },
    ],
    closingSummary:
      "Achieve perfect mash temperatures without the guesswork—let the Infusion Temperature Calculator make your brew day smoother and more consistent! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={InfusionStepImage} imageDescription="" />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Infusion Step Tool" />
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
