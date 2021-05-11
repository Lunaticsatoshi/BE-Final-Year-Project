import { Label, Input, Select, Textarea, Button, Slider, Box } from "theme-ui";

export default function Forms() {
  return (
    <Box as="form" sx={styles.forms} onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="username">Username</Label>
      <Input name="username" id="username" mb={3} sx={styles.forms.input} />
      <Label htmlFor="username">Username</Label>
      <Input name="username" id="username" mb={3} sx={styles.forms.input} />
      <Label htmlFor="username">Username</Label>
      <Input name="username" id="username" mb={3} sx={styles.forms.input} />
      <Label htmlFor="username">Username</Label>
      <Input name="username" id="username" mb={3} sx={styles.forms.input} />
      <Label htmlFor="sound">Sound</Label>
      <Select name="sound" id="sound" mb={3}>
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
      </Select>
      <Label>Slider</Label>
      <Slider mb={3} />
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
      width: ["auto", "auto", "400px"],
      height: "50px",
      borderRadius: "25px",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
};
