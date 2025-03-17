import React, { JSX } from "react";
import DashboardPageTemplate from "../../components/templates/DashboardPageTemplate";
import TitleView from "../../components/Views/TitleView";

export default function BrewDayPage(): JSX.Element {
  return (
    <>
      <DashboardPageTemplate
        pageName={""}
        pageDescription={""}
        pageContent={
          <>
            <TitleView title="Brew Day!" />
          </>
        }
        id={""}
      />
    </>
  );
}
