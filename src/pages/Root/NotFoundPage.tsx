import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";
import TitleView from "../../components/Views/TitleView";
import SubtitleView from "../../components/Views/SubtitleView";
import ButtonActionView from "../../components/Views/ButtonActionView";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  function goBackward() {
    navigate(-1);
  }

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
        <PageTemplate id="not-found-page">
          <Navbar />
          <div
            style={{
              height: "250px",
            }}
          >
            <TitleView title={"Page Not Found"} />
            <SubtitleView
              text={"This page could not be found. Please Try Again Later."}
            />
            <ButtonActionView
              buttons={[
                {
                  text: "Back",
                  isPrimary: true,
                  action: goBackward,
                },
              ]}
            />
          </div>
          <Footer />
        </PageTemplate>
      </Suspense>
    </>
  );
}
