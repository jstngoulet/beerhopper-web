import { JSX } from "react";
import ComponentProps from "../../models/types/ComponentProps";
import Navbar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";
import PageTemplate from "../../components/templates/PageTemplate";

export default function ToolWrapperPageTemplate({
  className,
  children,
}: ComponentProps): JSX.Element {
  return (
    <PageTemplate className={className} id={"tools"}>
      <Navbar />
      {children}
      <Footer />
    </PageTemplate>
  );
}
