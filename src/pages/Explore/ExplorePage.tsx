import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";
import { Grid2 as Grid, Box } from "@mui/material";
import SubtitleView from "../../components/Views/SubtitleView";
import TitleView from "../../components/Views/TitleView";

export default function ExplorePage(): JSX.Element {
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
        <PageTemplate id="explore-page">
          <Navbar />
          <Box>
            <Grid container columns={4} direction={"row"}>
              <Grid size={1}>
                <div
                  style={{
                    backgroundColor: "red",
                  }}
                >
                  Profile and Quick Links
                </div>
              </Grid>
              <Grid size={2}>
                <div>
                  <TitleView title="Primary Content" />
                  <SubtitleView text="User Feed will go here" />
                </div>
              </Grid>
              <Grid size={1}>
                <div
                  style={{
                    backgroundColor: "green",
                  }}
                >
                  Popular Items (Following/Followers if logged in)
                </div>
              </Grid>
            </Grid>
          </Box>
          <Footer />
        </PageTemplate>
      </Suspense>
    </>
  );
}
