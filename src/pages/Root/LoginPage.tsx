import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";
import FullscreenImage from "../../components/Views/FullScreenImage";
import { LoginForm } from "../../components/forms/LoginForm";
import BannerImage from "../../assets/BannerImages/Brewery-Cover.webp";
import { Box, useMediaQuery } from "@mui/material";

export default function LoginPage(): JSX.Element {
  const isDesktop: boolean = useMediaQuery("(max-width: 1000px)");

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
        <PageTemplate id="login-page">
          <Navbar />
          <FullscreenImage
            src={BannerImage}
            alt="Banner Image"
            children={
              <Box
                sx={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  flexDirection: isDesktop ? "column" : "row",
                  alignItems: "center",
                  justifyContent: isDesktop ? "center" : "flex-end",
                }}
              >
                <Box
                  sx={{
                    width: isDesktop ? "80%" : "40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: isDesktop ? "0" : "auto",
                    padding: 4,
                  }}
                >
                  <LoginForm />
                </Box>
              </Box>
            }
            sx={{
              filter: "blur(5px)"
            }}
          />
          <Footer />
        </PageTemplate>
      </Suspense>
    </>
  );
}
