import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layoutApp";
import Forms from "sections/form";
export default function PredictionPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Forms />
      </Layout>
    </ThemeProvider>
  );
}
