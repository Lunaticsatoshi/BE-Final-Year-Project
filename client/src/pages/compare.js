import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "layouts/layoutApp";
import Forms from "sections/form";
import Prediction from "sections/prediction";
export default function ComparePage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Prediction/>
      </Layout>
    </ThemeProvider>
  );
}
