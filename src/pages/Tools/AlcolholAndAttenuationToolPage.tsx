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
import AlcoholAndAttenuationImage from '../../assets/tool-icons/Alcohol-And-Attenuation-Calculator.webp'

export default function AlcoholAndAttenuationToolPage(): JSX.Element {
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
    name: "Alcohol and Attenuation Calculator",
    description:
      "The Alcohol and Attenuation Calculator is an indispensable tool for brewers to accurately determine the alcohol by volume (ABV) and apparent attenuation of their beer. Understanding these metrics helps gauge fermentation efficiency and predict the final flavor profile.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "ABV Calculation",
        bodyText:
          "Quickly determine the alcohol content based on original gravity (OG) and final gravity (FG).",
      },
      {
        boldText: "Apparent Attenuation",
        bodyText:
          "Calculate the percentage of sugar converted to alcohol and CO₂.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter OG and FG with support for both specific gravity and °Plato.",
      },
      {
        boldText: "Dual Unit Support",
        bodyText: "Switch between metric and imperial measurements.",
      },
      {
        boldText: "Batch Logging",
        bodyText: "Save calculated ABV and attenuation for each brew session.",
      },
      {
        boldText: "Brewing Insights",
        bodyText:
          "Get tips on improving attenuation and achieving desired ABV.",
      },
    ],
    closingSummary:
      "Brew with confidence, knowing your beer’s strength and fermentation performance, with the Alcohol and Attenuation Calculator! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={AlcoholAndAttenuationImage} />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Alcohol and Attenuation" />
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
