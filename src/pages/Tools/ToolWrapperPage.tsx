import { JSX } from "react";
import ComponentProps from "../../models/types/ComponentProps";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";
import PageTemplate from "../../components/templates/PageTemplate";
import { Adsense } from "@ctrl/react-adsense";

export default function ToolWrapperPageTemplate({
  className,
  children,
}: ComponentProps): JSX.Element {
  return (
    <PageTemplate className={className} id={"tools"}>
      <Navbar />
      {children}
      {/* <Adsense
        client="ca-pub-4744891585197048"
        slot="7259870550"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      /> */}
      <Footer />
    </PageTemplate>
  );
}
