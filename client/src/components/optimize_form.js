import { useState } from "react";
import { Label, Input, Select, Button, Slider, Box, Grid } from "theme-ui";

export default function OptimizeForms({ onAdd }) {
  const [cloudProvider, setCloudProvider] = useState("AWS");
  const [cpuCores, setCpuCores] = useState(2);
  const [bandwidth, setBandwidth] = useState(16);
  const [instances, setInstances] = useState(2);
  const [hour1, setHour1] = useState("");
  const [hour2, setHour2] = useState("");
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const [monthStart, setMonthStart] = useState("");
  const [monthEnd, setMonthEnd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(parseInt(cpuCores));
    const prediction = {
      "CPU Cores": parseInt(cpuCores),
      Memory: parseInt(memory),
      Bandwidth: parseInt(bandwidth),
      Instances: parseInt(instances),
      "Hour 1": parseFloat(hour1),
      "Hour 2": parseFloat(hour2),
      "Day Start": parseFloat(dayStart),
      "Day End": parseFloat(dayEnd),
      "Month Start": parseFloat(monthStart),
      "Month End": parseFloat(monthEnd),
    };

    onAdd(prediction);
    setHour1("");
    setHour2("");
    setDayStart("");
    setDayEnd("");
    setMonthStart("");
    setMonthEnd("");
  };

  return (
    <Box as="form" sx={styles.forms} onSubmit={onSubmit}>
      <Label>Cloud Provider</Label>
      <Select
        name="cloudProvider"
        id="CLOUDPROVIDER"
        mb={3}
        sx={styles.forms.selectInput}
        onChange={(e) => {
          setCloudProvider(e.target.value);
        }}
      >
        <option>AWS</option>
        <option>GCP</option>
        <option>Azure</option>
      </Select>
      <Label>CPU Cores</Label>
      <Select
        name="CPUCores"
        id="CPUCores"
        mb={3}
        sx={styles.forms.selectInput}
        onChange={(e) => {
          setCpuCores(e.target.value);
        }}
      >
        <option>2</option>
        <option>4</option>
        <option>8</option>
      </Select>
      <Box>
        <Label>Pay Value</Label>
        <Input
          value={hour1}
          name="Hour1"
          id="Hour1"
          mb={3}
          sx={styles.forms.input}
          onChange={(e) => {
            setHour1(e.target.value);
          }}
        />
      </Box>
      <Box>
        <Label>Sport Value</Label>
        <Input
          value={hour2}
          name="Hour2"
          id="Hour2"
          mb={3}
          sx={styles.forms.input}
          onChange={(e) => {
            setHour2(e.target.value);
          }}
        />
      </Box>
      <Button>Submit</Button>
    </Box>
  );
}

const styles = {
  forms: {
    display: "flex",
    flexDirection: "column",
    justifyContent: [null, null, "center", "center", "center"],
    mx: "auto",
    width: [null, null, "150px", "400px"],
    input: {
      borderColor: "gray",
      //   width: ["auto", "50", "300px"],
      height: "50px",
      borderRadius: "25px",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    selectInput: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      borderColor: "gray",
    },
  },
};
