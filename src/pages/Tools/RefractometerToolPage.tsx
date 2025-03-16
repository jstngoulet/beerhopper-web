import { JSX, Suspense, useState } from "react";
import { Helmet } from "react-helmet";
import ToolWrapperPageTemplate from "./ToolWrapperPage";
import TitleView from "../../components/Views/TitleView";
import { Box, Grid2 as Grid, List, ListItem, Typography } from "@mui/material";
import SplitContentNoteView from "../../components/Views/SplitContentNoteView";
import { NoteCardProps } from "../../components/cards/NoteCard";
import FeatureSummaryCard, {
  FeatureSummaryCardProps,
  FeatureSummaryListItem,
} from "../../components/cards/FeatureSummaryCard";

import RefractometerConverterImage from "../../assets/tool-icons/Refractometer-Converter.webp";
import ImageBlurView from "../../components/Views/ImageBlurView";
import TextFieldWithCaption from "../../components/fields/BaseFieldWithCaption";
import theme from "../../components/Theme";
import Spacer from "../../components/common/Spacer";
import React from "react";
import ButtonActionView from "../../components/Views/ButtonActionView";
import SubtitleView from "../../components/Views/SubtitleView";
import CollapsableView from "../../components/common/CollapsableView";
import { isDecimal } from "../../models/utilities/NumberVerification";

export default function RefractometerToolPage(): JSX.Element {
  const defaultProperties = {
    gravity: "",
    refractometer: "",
    distilledReading: "0.0",
    wortRefractometerReading: "10.00",
    wortHydrometerReading: "1.039",
  };

  const [refractometerValue, setRefactometerValue] = React.useState<string>(
    defaultProperties.refractometer
  );

  const [gravityValue, setGravityValue] = React.useState<string>(
    defaultProperties.gravity
  );

  const [distilledReadingValue, setDistilledReading] = React.useState<string>(
    defaultProperties.distilledReading
  );

  const [wortRefractomerReading, setWortRefractomerReading] =
    React.useState<string>(defaultProperties.wortRefractometerReading);

  const [wortHydrometerReading, setWorHydrometerReading] =
    React.useState<string>(defaultProperties.wortHydrometerReading);

  const handleRefractomterValueChange = (newValue: string) => {
    // Allow only numbers and restrict to the range 0-100
    if (isDecimal(newValue) && Number(newValue) <= 100) {
      setRefactometerValue(newValue); // Pass the updated value to the parent
      setGravityValue(defaultProperties.gravity);
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  const handleRefractometerExit = async () => {
    if (
      isDecimal(refractometerValue) &&
      isDecimal(distilledReadingValue) &&
      isDecimal(wortHydrometerReading) &&
      isDecimal(wortRefractomerReading) &&
      Number(refractometerValue) <= 100
    ) {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User is not authenticated");

        const queryParams = new URLSearchParams({
          brix: refractometerValue,
          distilledWaterCalibration: distilledReadingValue,
          refractometerReading: wortRefractomerReading,
          hydrometerReading: wortHydrometerReading,
        }).toString();

        const response = await fetch(
          `${process.env.REACT_APP_API_SERVER_HOST}/tools/refractometer?${queryParams}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || `Server error: ${response.status}`
          );
        }

        const data = await response.json();
        setGravityValue(data.gravity);
        setErrorMessage("");
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An unknown error occurred.";
        console.error("Refractometer calculation failed:", errorMessage);
        setErrorMessage(errorMessage);
      }
    }
  };

  const handleDistilledReadingChange = (newValue: string) => {
    if (!isDecimal(newValue)) return;

    setDistilledReading(newValue);
  };

  const handleWortRefractometerChange = (newValue: string) => {
    if (!isDecimal(newValue)) return;

    setWortRefractomerReading(newValue);
  };

  const handleWortHydrometerChange = (newValue: string) => {
    if (!isDecimal(newValue)) return;

    setWorHydrometerReading(newValue);
  };

  const resetCalculator = () => {
    setRefactometerValue(defaultProperties.refractometer);
    setGravityValue(defaultProperties.gravity);
    setDistilledReading(defaultProperties.distilledReading);
    setWorHydrometerReading(defaultProperties.wortHydrometerReading);
    setWortRefractomerReading(defaultProperties.wortRefractometerReading);
    setErrorMessage("");
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
          <CollapsableView
            title={"Calibration Settings"}
            content={
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
                    value={distilledReadingValue}
                    onChange={handleDistilledReadingChange}
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
                    value={wortRefractomerReading}
                    onChange={handleWortRefractometerChange}
                  />
                  <TextFieldWithCaption
                    label={"Hydrometer Reading"}
                    value={wortHydrometerReading}
                    onChange={handleWortHydrometerChange}
                  />
                </Grid>
              </Box>
            }
            open={true}
          />
          <Spacer />
          <CollapsableView
            title={"Helpful Tips"}
            content={
              <List>
                {tips.map((tip, index) => (
                  <ListItem>
                    <Typography
                      variant="body1"
                      component="p"
                      gutterBottom
                      color={theme.palette.primary.contrastText}
                    >
                      <Box component="b">{`${tip.boldText}: `}</Box>
                      {tip.bodyText}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            }
            open={false}
          />
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
                          {errorMessage && (
                            <Typography color="error" paddingTop={1}>
                              {errorMessage}
                            </Typography>
                          )}
                          <Spacer />
                          <ButtonActionView
                            buttons={[
                              {
                                text: "Reset",
                                isPrimary: false,
                                action: resetCalculator,
                              },
                              {
                                text: "Convert",
                                isPrimary: true,
                                action: handleRefractometerExit,
                                isDisabled: refractometerValue === "",
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
          </Box>
        </ToolWrapperPageTemplate>
      </Suspense>
    </>
  );
}
