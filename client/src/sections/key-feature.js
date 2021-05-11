/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text:
      "Compare cloud costs from all major service providers on the go and in a single place.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "Get best deals on cloud prices sustainable for your business.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text:
      "Pay a small monthly subsciption to keep your cloud performance and prices in check.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text:
      "Best in class customer support who are ready to help you 24x7 for your cloud needs.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="What's the Function?"
          title="Checkout the best features of our product that seperates us from the competition"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn 
            key={item.id}
            src={item.imgSrc}
            altText={item.altText}
            title={item.title}
            text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
