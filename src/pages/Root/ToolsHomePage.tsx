import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";
import { Grid2 as Grid } from "@mui/material";
import SimpleCard from "../../components/cards/SimpleCard";
import { tools } from '../../models/api/AvailableTools';
import ImageView from "../../components/Views/ImageView";
import SubtitleView from "../../components/Views/SubtitleView";
import TitleView from "../../components/Views/TitleView";

export default function ToolsHomePage(): JSX.Element {

  const gridItems: JSX.Element[] = tools.map((project) => (
    <Grid size={1} columns={2}>
      <SimpleCard
        iconPath={project.imageIcon}
        name={project.name}
        description={project.description}
        destination={project.path}
      />
    </Grid>
  ));
    

  return (
    <>
      <Helmet>
        <title>BeerHopper - Web</title>
        <meta
          name="description"
          content="Your one place for everything beer."
        />
      </Helmet>
      <Suspense>
        <PageTemplate id="tools-home-page">
          <Navbar />
          <Grid size={1}>
            <ImageView
              path="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcablevey.com%2Fwp-content%2Fuploads%2F2020%2F10%2FModern-Beer-Brewing-Equipment1-1.jpg&f=1&nofb=1&ipt=230e75f6233abb437941f4bc5f71f86c60122c7d632dbf1f8b4bf67069c94452&ipo=images"
              alt="Brewery Tools Image"
              maxHeight={300}
            />
            <TitleView title="Tools" />
            <SubtitleView text="Standard list of available tools used for brewing." />
            <Grid
              container
              spacing={2}
              padding={1}
              columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
              alignItems={"stretch"}
            >
              {gridItems}
            </Grid>
          </Grid>
          <Footer />
        </PageTemplate>
      </Suspense>
    </>
  );
}
