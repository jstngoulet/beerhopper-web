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

export default function AdjustGravityToolPage(): JSX.Element {
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
      name: "Gravity Boost Calculator",
      description:
        "The Gravity Boost Calculator is a handy tool designed to help brewers determine the amount of Dry Malt Extract (DME) or Liquid Malt Extract (LME) needed to raise the gravity of their wort to a desired level. Whether you’re looking to rescue a low-gravity batch or intentionally increase the strength of your brew, this tool makes the calculation quick and accurate.",
      featureTitle: "Features",
      listItems: [
        {
          boldText: "Customizable Inputs",
          bodyText:
            "Enter your wort volume, current gravity, and target gravity.",
        },
        {
          boldText: "DME and LME Options",
          bodyText:
            "Choose between dry or liquid malt extract, depending on your preference.",
        },
        {
          boldText: "Instant Calculation",
          bodyText:
            "Get precise amounts of DME or LME needed to achieve your target gravity.",
        },
        {
          boldText: "Measurement Units",
          bodyText: "Supports both metric and imperial units for convenience.",
        },
        {
          boldText: "Brewing Tips",
          bodyText:
            "Helpful suggestions on how to properly add extracts without affecting flavor or clarity.",
        },
      ],
      closingSummary:
        "Take the guesswork out of gravity adjustments and make your brewing process smoother with the Gravity Boost Calculator! 🍻",
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
            <TitleView title="Adjust Gravity Tool" />
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
