import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layoutApp";
import Comparison from "sections/comparison";
export default function ComparePage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Comparison />
      </Layout>
    </ThemeProvider>
  );
}
