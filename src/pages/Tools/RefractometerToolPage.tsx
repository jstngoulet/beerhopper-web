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


import RefractometerConverterImage from "../../assets/tool-icons/Refractometer-Converter.webp";
import ImageBlurView from "../../components/Views/ImageBlurView";

export default function RefractometerToolPage(): JSX.Element {
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
    name: "Refractometer Gravity Calculator",
    description:
      "The Refractometer Gravity Calculator is an essential tool for brewers who use a refractometer to measure wort gravity, especially during or after fermentation. Since alcohol skews refractometer readings, this tool accurately converts Brix or Plato measurements into specific gravity, giving you reliable data throughout the brewing process.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Accurate Gravity Conversion",
        bodyText:
          "Adjusts for the presence of alcohol to give accurate specific gravity readings.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter your original gravity (OG) and current Brix/Plato reading.",
      },
      {
        boldText: "Real-Time Calculations",
        bodyText:
          "Get corrected gravity instantly, eliminating manual math errors.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText: "Supports both Brix and Plato as input values.",
      },
      {
        boldText: "Detailed Instructions",
        bodyText:
          "Learn how to properly use your refractometer and input accurate readings.",
      },
      {
        boldText: "Batch Tracking",
        bodyText: "Save and compare readings throughout fermentation.",
      },
    ],
    closingSummary:
      "Say goodbye to inaccurate post-fermentation readings—get precise gravity data with the Refractometer Gravity Calculator! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={RefractometerConverterImage} imageDescription="" />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Refractometer Gravity" />
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
