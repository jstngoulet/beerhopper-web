import React, { JSX } from "react";
import GrainView from "../../components/Views/GrainView";
import HopsView from "../../components/Views/HopsView";
import YeastView from "../../components/Views/YeastView";
import DashboardPageTemplate from "../../components/templates/DashboardPageTemplate";

export default function IngredientsPage(): JSX.Element {
  return (
    <>
      <DashboardPageTemplate
        pageName={"Ingredients"}
        pageDescription={
          "Learn more about the ingredients used in beer, and which ones are used in a variety of recipes!"
        }
        pageContent={
          <>
            <GrainView />
            <HopsView />
            <YeastView />
          </>
        }
        id={"ingredients"}
      />
    </>
  );
}
