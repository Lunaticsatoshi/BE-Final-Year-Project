import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import numeral from "numeral";

import { buildChartData } from "utilities/util";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

export default function CardLineChart() {
  const [data, setData] = useState({});
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    const fetchData = async () => {
      const dailyData = await fetchDailyData();
      let chartData = buildChartData(dailyData, casesType);
      setData(chartData);
    };

    fetchData();
  }, []);

  const fetchDailyData = async () => {
    try {
      const {data} = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
      );

      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  };
  return (
    <div sx={styles.container}>
      <h2>Line Example</h2>
      {data[0] ? (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
          options={options}
        />
      ) : null}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
  },
};