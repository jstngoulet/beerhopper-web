import { Box, Grid2, useMediaQuery } from "@mui/material";
import React, {JSX, Suspense} from "react"
import ExploreSection from "../common/ExploreSection";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../navigation/Footer";
import PageTemplate from "./PageTemplate";


export interface DashboardPageTemplateProps {
    pageName: string;
    pageDescription: string;
    pageContent: React.ReactNode;
    id: string;
}

export default function DashboardPageTemplate({
    pageName, 
    pageDescription, 
    pageContent,
    id,
}: DashboardPageTemplateProps): JSX.Element {
    
  const isMobile: boolean = useMediaQuery("(max-width: 1000px)");

  const profileSection: JSX.Element = (
    <Box
      sx={{
        marginTop: "10px",
        padding: 2,
        paddingTop: 2,
        position: "sticky",
        top: 70,
      }}
    >
      <ExploreSection title="Profile"></ExploreSection>
    </Box>
  );

  const popularItemsAndLinks: JSX.Element = (
    <Box
      sx={{
        marginTop: "10px",
        padding: 2,
        paddingTop: 2,
        position: "sticky",
        top: 70,
      }}
    >
      <ExploreSection title="Popular Items" />
    </Box>
  );
  
  const centerContent: JSX.Element = (
    <Box
      sx={{
        marginTop: "10px",
        padding: 2,
      }}
    >
      <Grid2 container spacing={1} direction={"column"}>
        {pageContent}
      </Grid2>
    </Box>
  );

  const mobileRender: JSX.Element = (
    <Box>
      <Grid2 container columns={1} direction={"row"}>
        <Grid2 size={1}>{centerContent}</Grid2>
      </Grid2>
    </Box>
  );

  const desktopRender: JSX.Element = (
    <Box>
      <Grid2 container columns={4} direction={"row"}>
        <Grid2 size={1}>{profileSection}</Grid2>
        <Grid2 size={2}>{centerContent}</Grid2>
        <Grid2 size={1}>{popularItemsAndLinks}</Grid2>
      </Grid2>
    </Box>
  );
  
 return (
   <>
     <Helmet>
       <title>{`BeerHopper: ${pageName}`}</title>
       <meta name="description" content={pageDescription} />
     </Helmet>
     <Suspense>
       <PageTemplate id={id}>
         <Navbar />
         {isMobile ? mobileRender : desktopRender}
         <Footer />
       </PageTemplate>
     </Suspense>
   </>
 );   
}