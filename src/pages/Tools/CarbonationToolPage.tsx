import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import ToolWrapperPageTemplate from "./ToolWrapperPage";
import ImageView from "../../components/Views/ImageView";
import TitleView from "../../components/Views/TitleView";
import { Box, List, ListItem, Typography } from "@mui/material";
import SplitContentNoteView from "../../components/Views/SplitContentNoteView";
import { NoteCardProps } from "../../components/cards/NoteCard";
import FeatureSummaryCard, {
  FeatureSummaryCardProps,
} from "../../components/cards/FeatureSummaryCard";

export default function CarbonationToolPage(): JSX.Element {
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
    name: "Carbonation Calculator",
    description:
      "The Carbonation Calculator is a vital tool for brewers, meadmakers, and cider makers who want to achieve the perfect level of carbonation for their beverages. Whether you're bottling beer, mead, or cider, this tool helps you calculate the precise amount of priming sugar or CO2 pressure needed to reach your desired carbonation level.",
    featureTitle: "Features",
    listItems: [
      {
        boldText: "Priming Sugar Calculation",
        bodyText:
          "Determine the exact amount of sugar to add (corn sugar, table sugar, or other options) for your desired carbonation level.",
      },
      {
        boldText: "CO2 Pressure Estimation",
        bodyText:
          "For kegging, calculate the amount of CO2 pressure required to carbonate your beverage to the desired volume of CO2 (volumes of CO2 or PSI).",
      },
      {
        boldText: "Custom Inputs",
        bodyText:
          "Enter your batch size, current temperature, and target carbonation level (measured in volumes of CO2 or PSI).",
      },
      {
        boldText: "Unit Flexibility",
        bodyText:
          "Supports both metric and imperial measurements, including ounces, grams, liters, gallons, and PSI.",
      },
      {
        boldText: "Real-Time Calculations",
        bodyText:
          "Instantly see how different sugar types and carbonation levels will affect your batch.",
      },
      {
        boldText: "Carbonation Tips",
        bodyText:
          "Learn how temperature affects carbonation and how to avoid over-carbonating or under-carbonating your beverage.",
      },
    ],
    closingSummary:
      "Achieve perfect carbonation every time with the Carbonation Calculator! 🍻🍷🍯",
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageView
            path="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencealert.com%2Fimages%2F2019-05%2Fprocessed%2Fegyptian_beer_cover_unsplash_1024.jpg&f=1&nofb=1&ipt=9837ccdd5fffc07508d07d11550b2eb6748acaa42b9cb0e9d1f306561657d352&ipo=images"
            alt="Beer Cover Image"
            maxHeight={250}
          />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Carbonation" />
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
