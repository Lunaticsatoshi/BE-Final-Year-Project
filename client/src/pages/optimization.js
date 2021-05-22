import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layoutApp";
import Optimization from "sections/optimize";
export default function OptimizationPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Optimization />
      </Layout>
    </ThemeProvider>
  );
}