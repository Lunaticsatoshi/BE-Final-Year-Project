/** @jsx jsx */
import { useState } from "react";
import axios from "axios";
import { jsx } from "theme-ui";
import { Container, Box, Alert, Close } from "theme-ui";
import OptimizeForm from "components/optimize_form";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";

export default function OptimizeBanner() {
  const [data, setData] = useState({});
  const [alert, showAlert] = useState(true);

  // Add Optimization
  const addOptimization = async (optimizationValues) => {
    console.log(optimizationValues);
    const { data } = await axios.post(
      "https://cloudy-web-api.herokuapp.com/optimize",
      optimizationValues
    );
    setData(data);
  };

  const closeAlert = () => {
    showAlert(false);
  };

  return (
    <section sx={styles.formPage}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <OptimizeForm onAdd={addOptimization} />
        </Box>
        <Box sx={styles.thumbnail}>
          {alert && (
            <Alert sx={styles.alerts} onClick={closeAlert}>
              {data.message}
              <Close ml="auto" mr={-2} />
            </Alert>
          )}
          {data.message && (
            <FeatureCard
              src={Performance}
              altText={data.message}
              title={data.message}
              text={data.text}
            />
          )}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  formPage: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", "wrap", "wrap", "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    // flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, "auto"],
    width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
    mb: ["40px", null, null, null, null, 7],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    width: "100%",
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
    width: "50px",
  },
  alerts: {
    // primary: {
    //   color: 'background',
    //   bg: 'primary',
    // },
    // muted: {
    //   color: 'text',
    //   bg: 'muted',
    // },
    mb: "60px",
  },
  selectInput: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderColor: "gray",
  },
};
