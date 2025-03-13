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
import MashTempAdjusterImage from "../../assets/tool-icons/Mash-Temp-Adjuster.webp";
import ImageBlurView from "../../components/Views/ImageBlurView";

export default function MashAdjustToolPage(): JSX.Element {
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
    name: "Mash Temperature Adjuster",
    description:
      "The Mash Temperature Adjuster is a practical tool for brewers who need to fine-tune their mash temperature after an initial reading. Whether your mash is too hot or too cold, this tool calculates the precise volume and temperature of hot or cold water needed to bring your mash to the perfect temperature.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Accurate Adjustments",
        bodyText:
          "Calculate the amount and temperature of infusion water needed to hit your desired mash temperature.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter your current mash temperature, target temperature, mash volume, and grain weight.",
      },
      {
        boldText: "Unit Options",
        bodyText:
          "Supports both Celsius and Fahrenheit for worldwide compatibility.",
      },
      {
        boldText: "Fast Calculations",
        bodyText:
          "Get results instantly to make on-the-fly adjustments without interrupting your brew day.",
      },
      {
        boldText: "Helpful Tips",
        bodyText:
          "Learn best practices for adding hot or cold water without disturbing your mash consistency.",
      },
    ],
    closingSummary:
      "Take control of your mash and perfect your brew with the Mash Temperature Adjuster! 🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={MashTempAdjusterImage} imageDescription="" />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Mash Adjust Tool" />
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
