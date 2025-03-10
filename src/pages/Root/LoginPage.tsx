import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/templates/PageTemplate";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";

export default function LoginPage(): JSX.Element {
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
          <div
            style={{
              height: "250px",
            }}
          >
            Login
          </div>
          <Footer />
        </PageTemplate>
      </Suspense>
    </>
  );
}
