import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import ToolWrapperPageTemplate from "./ToolWrapperPage";
import TitleView from "../../components/Views/TitleView";
import {
  Box,
  Collapse,
  Grid2 as Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import SplitContentNoteView from "../../components/Views/SplitContentNoteView";
import { NoteCardProps } from "../../components/cards/NoteCard";
import FeatureSummaryCard, {
  FeatureSummaryCardProps,
  FeatureSummaryListItem,
} from "../../components/cards/FeatureSummaryCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import RefractometerConverterImage from "../../assets/tool-icons/Refractometer-Converter.webp";
import ImageBlurView from "../../components/Views/ImageBlurView";
import TextFieldWithCaption from "../../components/fields/BaseFieldWithCaption";
import theme from "../../components/Theme";
import Spacer from "../../components/common/Spacer";
import React from "react";
import ButtonActionView from "../../components/Views/ButtonActionView";
import SubtitleView from "../../components/Views/SubtitleView";
import AdSenseBanner from "../../components/common/GoogleAds";

export default function RefractometerToolPage(): JSX.Element {
  const [calibrationOpen, setCalibrationOpen] = React.useState<boolean>(false);
  const [tipsOpen, setTipsOpen] = React.useState<boolean>(false);

  const [refractometerValue, setRefactometerValue] =
    React.useState<string>("0.0");
  const [gravityValue, setGravityValue] = React.useState<string>("1.0000");

  const handleCalibrationToggle = () => {
    setCalibrationOpen(!calibrationOpen);
  };

  const handleTipsToggle = () => {
    setTipsOpen(!tipsOpen);
  };

  const isDecimal = (value: string): boolean => {
    return /^-?\d*\.?\d*$/.test(value);
  };

  const handleRefractomterValueChange = (newValue: string) => {
    // Allow only numbers and restrict to the range 0-100
    if (isDecimal(newValue) && Number(newValue) <= 100) {
      setRefactometerValue(newValue); // Pass the updated value to the parent
      setGravityValue("");
    }
  };

  const handleRefractometerExit = () => {
    if (isDecimal(refractometerValue) && Number(refractometerValue) <= 100) {
      const numberValue = Number(refractometerValue);
      const newGravityValue = brixToGravity(numberValue);
      setGravityValue(newGravityValue.toString());
      return;
    }
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
    name: "Refractometer to Gravity Calculator",
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

  const tips: FeatureSummaryListItem[] = [
    {
      boldText: "Calibrate Your Refractometer",
      bodyText:
        "Always calibrate using distilled water before measuring wort. Regular calibration ensures accuracy.",
    },
    {
      boldText: "Account for Wort Correction",
      bodyText:
        "Use both refractometer and hydrometer readings to calculate the wort calibration factor accurately.",
    },
    {
      boldText: "Temperature Matters",
      bodyText:
        "Measure the wort at the recommended temperature. Let hot wort cool to room temperature before measuring.",
    },
    {
      boldText: "Correct for Fermentation",
      bodyText:
        "After fermentation starts, alcohol affects refractometer readings. Use correction formulas for accuracy.",
    },
    {
      boldText: "Precision is Key",
      bodyText:
        "Use a refractometer with at least 0.1 Brix precision. Round gravity values to four decimal places.",
    },
    {
      boldText: "Use Reliable Formulas",
      bodyText:
        "Employ reliable Brix-to-gravity formulas to avoid incorrect alcohol content measurements.",
    },
    {
      boldText: "Display Calculation Details",
      bodyText:
        "Show calibration settings and adjustment factors to maintain transparency.",
    },
    {
      boldText: "Test with Known Values",
      bodyText:
        "Verify calculator accuracy with known Brix and gravity readings and cross-check with a hydrometer.",
    },
  ];

  const note: NoteCardProps = {
    content: (
      <Box>
        <Box>
          {/* Calibration SEttings */}

          <Grid
            container
            columns={2}
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2" component="h6" gutterBottom>
              Calibration Settings
            </Typography>
            <IconButton
              onClick={handleCalibrationToggle}
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              {calibrationOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Grid>
          <Collapse in={calibrationOpen} timeout="auto" unmountOnExit>
            <Box
              sx={{
                backgroundColor: theme.palette.background.paper,
                padding: "1em 1em 2em 1em",
                borderRadius: 1,
              }}
            >
              <Grid container columns={1} direction={"column"} spacing={2}>
                <Typography
                  variant="body1"
                  component="b"
                  gutterBottom
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  Distilled Water Calibration
                </Typography>
                <TextFieldWithCaption
                  label={"Distilled Reading"}
                  value={"0.0"}
                  onChange={function (value: string): void {
                    // throw new Error("Function not implemented.");
                  }}
                />
                <Typography
                  variant="body1"
                  component="b"
                  gutterBottom
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  Wort Measurement
                </Typography>
                <TextFieldWithCaption
                  label={"Refractomer Reading"}
                  value={"12.5"}
                  onChange={function (value: string): void {
                    // throw new Error("Function not implemented.");
                  }}
                />
                <TextFieldWithCaption
                  label={"Hydrometer Reading"}
                  value={"1.048"}
                  errorMessage="Hello"
                  onChange={function (value: string): void {
                    // throw new Error("Function not implemented.");
                  }}
                />
              </Grid>
            </Box>
          </Collapse>
          <Spacer />
          <Grid
            container
            columns={2}
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2" component="h6" gutterBottom>
              Helpful Tips
            </Typography>
            <IconButton
              onClick={handleTipsToggle}
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              {tipsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Grid>
          <Collapse in={tipsOpen} timeout="auto" unmountOnExit>
            <List>
              {tips.map((tip, index) => (
                <ListItem>
                  <Typography variant="body1" component="p" gutterBottom>
                    <Box component="b">{`${tip.boldText}: `}</Box>
                    {tip.bodyText}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      </Box>
    ),
  };

  return (
    <>
      <Helmet>
        <title>{`BeerHopper: ${toolInfo.name}`}</title>
        <meta name="description" content={toolInfo.description} />
      </Helmet>
      <Suspense>
        <ToolWrapperPageTemplate id={"infusion-step-tool"}>
          <ImageBlurView
            image={RefractometerConverterImage}
            imageDescription=""
          />
          <Box sx={{ margin: 2 }}>
            <TitleView title="Refractometer to Gravity" />
            <SplitContentNoteView
              content={
                <Box>
                  <FeatureSummaryCard
                    name={toolInfo.name}
                    description={toolInfo.description}
                    featureTitle={toolInfo.featureTitle}
                    listItems={toolInfo.listItems}
                    closingSummary={toolInfo.closingSummary}
                    calculator={
                      <Box>
                        <Grid container direction={"column"}>
                          <Typography
                            variant="subtitle1"
                            component="h5"
                            gutterBottom
                          >
                            Calculate
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            gutterBottom
                          >
                            Enter your refractometer reading below and adjust
                            calibration settings as needed.
                          </Typography>
                          <Spacer />
                          <TextFieldWithCaption
                            label={"Refractometer Reading"}
                            value={refractometerValue}
                            onChange={handleRefractomterValueChange}
                            onReturn={handleRefractometerExit}
                          />
                          <Spacer />
                          <ButtonActionView
                            buttons={[
                              {
                                text: "Convert",
                                isPrimary: true,
                                action: handleRefractometerExit,
                              },
                            ]}
                          />
                          <Spacer />
                          {gravityValue !== "" ? (
                            <SubtitleView text={`Gravity: ${gravityValue}`} />
                          ) : undefined}
                        </Grid>
                      </Box>
                    }
                  />
                </Box>
              }
              flipped={false}
              note={note}
            />
            <AdSenseBanner
              client="ca-pub-3940256099942544"
              slot="1234567890"
              className="tools-ad"
            />
          </Box>
        </ToolWrapperPageTemplate>
      </Suspense>
    </>
  );
}

/**
 * Converts refractometer reading (Brix) to specific gravity (SG) for unfermented wort.
 * Includes calibration settings for distilled water and wort measurement using refractometer and hydrometer readings.
 * @param brix - The Brix value obtained from the refractometer.
 * @param distilledWaterCalibration - The Brix reading of distilled water (usually 0.0).
 * @param refractometerReading - The Brix value obtained from the refractometer for calibration.
 * @param hydrometerReading - The specific gravity obtained from the hydrometer for calibration.
 * @returns The calculated specific gravity (SG).
 */
function brixToGravity(
  brix: number,
  distilledWaterCalibration: number = 0.0,
  refractometerReading: number = 12.5,
  hydrometerReading: number = 1.048
): number {
  // Calculate wort calibration factor using both readings
  const wortCalibration =
    hydrometerReading /
    (1 +
      refractometerReading / (258.6 - (refractometerReading / 258.2) * 227.1));
  // Adjust Brix for distilled water calibration
  const adjustedBrix = (brix - distilledWaterCalibration) / wortCalibration;
  // Calculate specific gravity
  const gravity = 1 + adjustedBrix / (258.6 - (adjustedBrix / 258.2) * 227.1);
  return parseFloat(gravity.toFixed(4)); // Return gravity rounded to 4 decimal places
}

// // Example usage:
// const brixReading = 12.5;
// const distilledWaterCalibration = 0.0;
// const refractometerReading = 12.5;
// const hydrometerReading = 1.048;
// console.log(`Specific Gravity: ${brixToGravity(brixReading, distilledWaterCalibration, refractometerReading, hydrometerReading)}`);

// export default brixToGravity;
