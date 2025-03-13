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
import DecoctionVolumeImage from "../../assets/tool-icons/Decoction-Volume-Calculator.webp";
import ImageBlurView from "../../components/Views/ImageBlurView";

export default function DecocotionVolumeToolPage(): JSX.Element {
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
    name: "Decoction Volume",
    description:
      "The Decoction Volume Calculator is an indispensable tool for brewers utilizing traditional decoction mashing techniques. It helps you calculate the exact volume of mash to remove, boil, and return to the main mash in order to reach your desired temperature step. Perfect for brewing rich, complex lagers and traditional European styles!",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Precise Volume Calculation",
        bodyText:
          "Determine the amount of mash to decoct to achieve your target temperature increase.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter current mash temperature, target temperature, grain weight, and mash thickness.",
      },
      {
        boldText: "Temperature Unit Flexibility",
        bodyText: "Supports both Celsius and Fahrenheit.",
      },
      {
        boldText: "Multi-Step Support",
        bodyText: "Calculate volumes for single, double, or triple decoctions.",
      },
      {
        boldText: "Expert Tips",
        bodyText:
          "Get guidance on boiling duration and mash consistency to maintain flavor and body.",
      },
    ],
    closingSummary:
      "Master the art of decoction mashing and elevate your traditional brews with confidence using the Decoction Volume Calculator! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={DecoctionVolumeImage} imageDescription="" />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Decoction Volume Calculator" />
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
