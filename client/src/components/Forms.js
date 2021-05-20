import {useState} from "react"
import { Label, Input, Select, Button, Slider, Box, Grid } from "theme-ui";

export default function Forms() {
  const [cpuCores, setCpuCores] = useState("");
  const [memory, setMemory] = useState("");
  const [bandwidth, setBandwidth] = useState("");
  const [instances, setInstances] = useState("");
  const [hour1, setHour1] = useState("");
  const [hour2, setHour2] = useState("");
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const [monthStart, setMonthStart] = useState("");
  const [monthEnd, setMonthEnd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(parseInt(cpuCores));
  }

  return (
    <Box as="form" sx={styles.forms} onSubmit={onSubmit}>
      <Label>CPU Cores</Label>
      <Select name="CPUCores" id="CPUCores" mb={3} sx={styles.forms.selectInput} onChange={(e) => {setCpuCores(e.target.value)}}>
        <option>2</option>
        <option>4</option>
        <option>8</option>
      </Select>
      <Label>Memory</Label>
      <Select name="Memory" id="Memory" mb={3} sx={styles.forms.selectInput} onChange={(e) => {setMemory(e.target.value)}}>
        <option>2</option>
        <option>4</option>
        <option>8</option>
        <option>16</option>
      </Select>
      <Label>Bandwidth</Label>
      <Select name="Bandwidth" id="Bandwidth" mb={3} sx={styles.forms.selectInput} onChange={(e) => {setBandwidth(e.target.value)}}>
        <option>16</option>
        <option>32</option>
        <option>64</option>
        <option>128</option>
        <option>256</option>
        <option>512</option>
      </Select>
      <Label>Instances</Label>
      <Select name="Instances" id="Instances" mb={3} sx={styles.forms.selectInput} onChange={(e) => {setInstances(e.target.value)}}>
        <option>2</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
      </Select>
      <Grid gap={2} columns={[2, "1fr 1fr"]}>
        <Box>
          <Label>Hour 1</Label>
          <Input name="Hour1" id="Hour1" mb={3} sx={styles.forms.input} onChange={(e) => {setHour1(e.target.value)}} />
        </Box>
        <Box>
          <Label>Hour 2</Label>
          <Input name="Hour2" id="Hour2" mb={3} sx={styles.forms.input} onChange={(e) => {setHour2(e.target.value)}}/>
        </Box>
      </Grid>
      <Grid gap={2} columns={[2, "1fr 1fr"]}>
        <Box>
        <Label>Day Start</Label>
          <Input name="DayStart" id="DayStart" mb={3} sx={styles.forms.input} onChange={(e) => {setDayStart(e.target.value)}} />
        </Box>
        <Box>
        <Label>Day End</Label>
          <Input name="DayEnd" id="DayEnd" mb={3} sx={styles.forms.input} onChange={(e) => {setDayEnd(e.target.value)}} />
        </Box>
      </Grid>
      <Grid gap={2} columns={[2, "1fr 1fr"]}>
        <Box>
        <Label>Month Start</Label>
          <Input name="MonthStart" id="MonthStart" mb={3} sx={styles.forms.input} onChange={(e) => {setMonthStart(e.target.value)}}/>
        </Box>
        <Box>
        <Label>Month End</Label>
          <Input name="MonthEnd" id="MonthEnd" mb={3} sx={styles.forms.input} onChange={(e) => {setMonthEnd(e.target.value)}}/>
        </Box>
      </Grid>
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
      width: ["auto", "50", "auto"],
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
