import React, { JSX } from "react";
import DashboardPageTemplate from "../../components/templates/DashboardPageTemplate";
import ForumPostForm from "../../components/forms/ForumPostForm";
import ForumDashboardView from "../../components/Views/ForumDashboardView";

export default function ForumsPage(): JSX.Element {
  return (
    <>
      <DashboardPageTemplate
        pageName={"Ask a Brewer"}
        pageDescription={
          "Have a question related to home or commercial brewing? Ask a question here for your peers to help you out!"
        }
        pageContent={
          <>
            <ForumPostForm />
            <ForumDashboardView />
          </>
        }
        id={""}
      />
    </>
  );
}
