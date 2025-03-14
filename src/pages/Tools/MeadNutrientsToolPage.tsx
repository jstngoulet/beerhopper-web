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
import MeadNutrientAdditionCalculatorImage from "../../assets/tool-icons/Mead-Nutrient-Addition-Calculator.webp";

export default function MeadNutrientsAgeToolPage(): JSX.Element {
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
    name: "Mead Nutrient Addition Calculator",
    description:
      "The Mead Nutrient Addition Calculator is an essential tool for mead makers, helping you determine the optimal nutrient additions for your honey-based fermentation. Proper nutrient management ensures healthy yeast activity, minimizes fermentation stress, and leads to a clean, well-balanced mead.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Nutrient Requirements",
        bodyText:
          "Calculate the right amount of nutrients (DAP, Go-Ferm, Ferm K, etc.) based on your mead’s specific gravity, batch size, and honey type.",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter original gravity, batch size, honey variety, and yeast strain for tailored nutrient recommendations.",
      },
      {
        boldText: "Addition Timings",
        bodyText:
          "Get precise guidance on when to add nutrients throughout the fermentation process.",
      },
      {
        boldText: "Multiple Nutrient Types",
        bodyText:
          "Supports common mead nutrients such as DAP, Yeast Energizer, and more.",
      },
      {
        boldText: "Efficient Fermentation",
        bodyText:
          "Optimize yeast health, prevent stuck fermentations, and reduce off-flavors with proper nutrient dosing.",
      },
      {
        boldText: "Unit Flexibility",
        bodyText: "Supports both metric and imperial measurements.",
      },
    ],
    closingSummary:
      "Ensure healthy fermentation and the best quality mead with the Mead Nutrient Addition Calculator! 🍯🍻",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView image={MeadNutrientAdditionCalculatorImage} />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Mead Nutrients" />
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
