/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Easy Configuration",
    title: "Easy Configuration",
    text:
      "Let’s just get this out of the way - there will always be a need for cloud hosting. We help you to configure cloud infrastructure as per your project needs and scalability.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Cloud Subscription",
    title: "Cloud Subscription",
    text:
      "We believe it’s important for every business to have access to cloud – especially when it comes to hosting Applications visited by millions of users worldwide.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Minimize Wastage",
    title: "Minimize Wastage",
    text:
      "Reduce the overall wastage of cloud resources and unwanted compute instances by perfectly balancing the computing services and scale as per your project needs.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Optimized Approach",
    title: "Optimized Approach",
    text:
      "Our goal is to provide you with the best support for your venture and help you configure your business needs without going through the hassle of dealing with complicated Technology and jargon just to have you project kick started.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Robust Technology"
          title="Cloud cost optimizer powered by Machine Learning"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
