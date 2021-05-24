/** @jsx jsx */
import { useState, useEffect } from "react";
import axios from "axios";
import { jsx } from "theme-ui";
import { Container, Box, Alert, Close, Select } from "theme-ui";
import Forms from "components/Forms";
import CardLineChart from "components/ChartCards/CardLineChart.js";

import { buildChartData } from "utilities/util";

export default function Banner() {
  const [data, setData] = useState({});
  const [lineData, setLineData] = useState({});
  const [alert, showAlert] = useState(true);
  const [casesType, setCasesType] = useState("AWS");

  useEffect(() => {
    const fetchData = async () => {
      const dailyData = await fetchDailyData();
      setData(dailyData);
      let chartData = buildChartData(dailyData, casesType);
      setLineData(chartData);
    };

    fetchData();
  }, []);

  const fetchDailyData = async () => {
    try {
      const { data } = await axios.post("https://cloudy-web-api.herokuapp.com/predict", {
        "CPU Cores": 2,
        Memory: 4,
        Bandwidth: 128,
        Instances: 2,
        "Hour 1": 0.29084,
        "Hour 2": 0.68593,
        "Day Start": 16.0685,
        "Day End": 15.6746,
        "Month Start": 255.34,
        "Month End": 345.56,
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  // Add Prediction
  const addPrediction = async (prediction) => {
    console.log(prediction);
    const { data } = await axios.post(
      "https://cloudy-web-api.herokuapp.com/predict",
      prediction
    );
    setData(data);

    let chartData = buildChartData(data, casesType);
    setLineData(chartData);
  };

  const changeCaseType = (e) => {
    setCasesType(e.target.value);
    let chartData = buildChartData(data, casesType);
    setLineData(chartData);
  }

  const closeAlert = () => {
    showAlert(false);
  };
  return (
    <section sx={styles.formPage}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <Forms onAdd={addPrediction} />
        </Box>
        <Box sx={styles.thumbnail}>
          <Select
            name="caseType"
            id="CASETYPE"
            mb={3}
            sx={styles.selectInput}
            onChange={changeCaseType}
          >
            <option>AWS</option>
            <option>GCP</option>
            <option>Azure</option>
          </Select>
          {alert && (
            <Alert sx={styles.alerts} onClick={closeAlert}>
              Beep boop, this is an alert!
              <Close ml="auto" mr={-2} />
            </Alert>
          )}
          <CardLineChart data={lineData} />
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
