import ToolProp from '../types/ToolProp';

// Import the images
import InfusionStepImage from "../../assets/tool-icons/Infusion-Step-Calculator.webp";
import DecoctionVolumeImage from "../../assets/tool-icons/Decoction-Volume-Calculator.webp";
import MashTempAdjusterImage from "../../assets/tool-icons/Mash-Temp-Adjuster.webp";
import MashPhCalculatorImage from "../../assets/tool-icons/Mash-Ph-Calculator.webp";
import YeastStarterCalculatorImage from '../../assets/tool-icons/Yeast-Starter-Calculator.webp'
import RefractometerConverterImage from '../../assets/tool-icons/Refractometer-Converter.webp'

export const tools: ToolProp[] = [
  {
    imageIcon: InfusionStepImage,
    name: "Infusion Step Tool",
    description:
      "The Infusion Step Tool is an essential tool for brewers looking to achieve precise mash temperatures when adding hot water to their grain bed. Whether you’re performing a step mash or correcting a mash that’s too cool, this calculator ensures you hit your target temperature every time.",
    active: true,
    path: "/tools/infusion-step",
  },
  {
    imageIcon: DecoctionVolumeImage,
    name: "Decoction Volume Tool",
    description:
      "The Decoction Volume Calculator is an indispensable tool for brewers utilizing traditional decoction mashing techniques. It helps you calculate the exact volume of mash to remove, boil, and return to the main mash in order to reach your desired temperature step. Perfect for brewing rich, complex lagers and traditional European styles!",
    active: false,
    path: "/tools/decoction-volume",
  },
  {
    imageIcon: MashTempAdjusterImage,
    name: "Mash Adjust",
    description:
      "The Mash Temperature Adjuster is a practical tool for brewers who need to fine-tune their mash temperature after an initial reading. Whether your mash is too hot or too cold, this tool calculates the precise volume and temperature of hot or cold water needed to bring your mash to the perfect temperature.",
    active: false,
    path: "/tools/mash-adjust",
  },
  {
    imageIcon: MashPhCalculatorImage,
    name: "Mash pH",
    description:
      "The Mash pH Calculator is an essential tool for brewers aiming to achieve optimal enzyme activity and flavor profile by accurately predicting and adjusting mash pH. Maintaining the right mash pH (typically between 5.2 and 5.6) is crucial for proper starch conversion and balanced beer flavor.",
    active: false,
    path: "/tools/mash-ph",
  },
  {
    imageIcon: YeastStarterCalculatorImage,
    name: "Yeast Starter",
    description:
      "The Yeast Starter Calculator is an invaluable tool for brewers looking to build healthy, vigorous yeast cell counts before pitching. Proper yeast propagation ensures strong fermentation, reduces lag time, and improves the overall quality of your beer—especially for high-gravity brews or lagers.",
    active: false,
    path: "/tools/yeast-starter",
  },
  {
    imageIcon: RefractometerConverterImage,
    name: "Refactometer",
    description:
      "The Refractometer to Gravity Calculator is an essential tool for brewers who use a refractometer to measure wort gravity, especially after fermentation has started. Since alcohol distorts refractometer readings, this calculator corrects the measurement to provide an accurate specific gravity or Brix value.",
    active: false,
    path: "/tools/refractometer",
  },
  {
    imageIcon: "",
    name: "Alcohol and Attenuation",
    description:
      "The Alcohol and Attenuation Calculator is an indispensable tool for brewers to accurately determine the alcohol by volume (ABV) and apparent attenuation of their beer. Understanding these metrics helps gauge fermentation efficiency and predict the final flavor profile.",
    active: false,
    path: "/tools/alcohol-and-attenuation",
  },
  {
    imageIcon: "",
    name: "Hop Age Tool",
    description:
      "The Hop Age Calculator is a vital tool for brewers looking to assess the freshness and potency of their hops. Over time, hops lose alpha acids and aromatic compounds, which can significantly impact bitterness and flavor. This calculator helps you accurately estimate the remaining alpha acid percentage based on storage conditions and age.",
    active: false,
    path: "/tools/hop-age",
  },
  {
    imageIcon: "",
    name: "Mead Nutrients",
    description:
      "The Mead Nutrient Addition Calculator is an essential tool for mead makers, helping you determine the optimal nutrient additions for your honey-based fermentation. Proper nutrient management ensures healthy yeast activity, minimizes fermentation stress, and leads to a clean, well-balanced mead.",
    active: false,
    path: "/tools/mead-nutrients",
  },
  {
    imageIcon: "",
    name: "Backsweeten",
    description:
      "The Backsweetening Calculator is an essential tool for brewers and mead makers looking to adjust the sweetness of their beverages after fermentation. Whether you’re creating a sweeter mead, cider, beer, or wine, this tool helps you calculate the exact amount of sugar or sweetener needed to reach your desired sweetness level without over-sweetening.",
    active: false,
    path: "/tools/backsweeten",
  },
  {
    imageIcon: "",
    name: "Sulfite Tool",
    description:
      "The Sulfite Addition Calculator is a crucial tool for winemakers, meadmakers, and brewers who want to properly stabilize their beverages. This tool helps you determine the precise amount of potassium metabisulfite (or sodium metabisulfite) needed to prevent oxidation, spoilage, and unwanted microbial growth while maintaining the flavor integrity of your product.",
    active: false,
    path: "/tools/sulfite",
  },
  {
    imageIcon: "",
    name: "Boil off Tool",
    description:
      "The Boil-Off Calculator is a crucial tool for brewers to determine the volume of wort that will evaporate during the boil. Knowing how much wort will boil off allows you to adjust your starting volume, ensuring you end up with the correct final volume for your recipe and fermentation vessel.",
    active: false,
    path: "/tools/boil-off",
  },
  {
    imageIcon: "",
    name: "Dilution Tool",
    description:
      "The Dilution Calculator is an essential tool for brewers, meadmakers, and winemakers who need to adjust the strength or concentration of their beverages. Whether you're adjusting your wort to reach the desired original gravity or diluting a high-alcohol beverage to a more balanced level, this tool helps you calculate exactly how much water (or other liquid) to add.",
    active: false,
    path: "/tools/dilution",
  },
  {
    imageIcon: "",
    name: "Adjust Gravity Tool",
    description:
      "The Gravity Boost Calculator is a handy tool designed to help brewers determine the amount of Dry Malt Extract (DME) or Liquid Malt Extract (LME) needed to raise the gravity of their wort to a desired level. Whether you’re looking to rescue a low-gravity batch or intentionally increase the strength of your brew, this tool makes the calculation quick and accurate.",
    active: false,
    path: "/tools/adjust-gravity",
  },
  {
    imageIcon: "",
    name: "Weight to Volume",
    description:
      "The Weight to Volume Calculator is a must-have tool for brewers, meadmakers, and winemakers who need to convert ingredients from weight measurements (such as grams, ounces, or pounds) to volume measurements (like milliliters, liters, or gallons). This tool ensures accuracy when adding ingredients like honey, sugars, grains, or hops, which can vary in density.",
    active: false,
    path: "/tools/weight-to-volume",
  },
  {
    imageIcon: "",
    name: "Carbonation",
    description:
      "The Carbonation Calculator is a vital tool for brewers, meadmakers, and cider makers who want to achieve the perfect level of carbonation for their beverages. Whether you're bottling beer, mead, or cider, this tool helps you calculate the precise amount of priming sugar or CO2 pressure needed to reach your desired carbonation level.",
    active: false,
    path: "/tools/carbonation",
  },
  //   {
  //     imageIcon: "",
  //     name: "",
  //     description: "",
  //   },
];
// .filter((item) => item.active)
// .sort((a, b) => (a.name > b.name ? 1 : -1));
