import { useState } from "react";
import { Label, Input, Select, Button, Box } from "theme-ui";

export default function OptimizeForms({ onAdd }) {
  const [cloudProvider, setCloudProvider] = useState("AWS");
  const [cpuCores, setCpuCores] = useState(2);
  const [payValue, setPayValue] = useState("");
  const [spotValue, setSpotValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (payValue === "" || spotValue === ""){
      alert("Pay and Spot pricing are required for optimization")
      return
    }
    const optimizationValues = {
      "Cloud": cloudProvider,
      "Cores": parseInt(cpuCores),
      "Pay": parseFloat(payValue),
      "Spot": parseFloat(spotValue),
    };

    onAdd(optimizationValues);
    setPayValue("");
    setSpotValue("");
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
          value={payValue}
          name="Hour1"
          id="Hour1"
          mb={3}
          sx={styles.forms.input}
          onChange={(e) => {
            setPayValue(e.target.value);
          }}
        />
      </Box>
      <Box>
        <Label>Sport Value</Label>
        <Input
          value={spotValue}
          name="Hour2"
          id="Hour2"
          mb={3}
          sx={styles.forms.input}
          onChange={(e) => {
            setSpotValue(e.target.value);
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
