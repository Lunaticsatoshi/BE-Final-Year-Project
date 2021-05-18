/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Input,
  Grid,
} from "theme-ui";
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Compare Cloud Hosting Prices All In One Place
          </Heading>
          <Text as="p" variant="heroSecondary">
            Checkout our website to compare prices from all major cloud service
            providers on a single platform. If you're a new startup or business
            this is the place to go!
          </Text>
          <Box
            as="form"
            onSubmit={(e) => e.preventDefault()}
            sx={styles.banner.forms}
          >
            <Grid gap={2} columns={[1, null, 2]}>
              <Box>
                <Input name="email" id="username" mb={3} placeholder="hentaihaven.org@xyz.com" />
              </Box>
              <Box>
                <Button variant="primary">Explore</Button>
              </Box>
            </Grid>
          </Box>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner"/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
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
      backgroundImage: `url(${ShapeLeft})`,
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
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      borderRadius: "5px",
      img: {
        position: "relative",
        height: [245, "auto"],
        borderRadius: "5px"
      },
    },
    forms: {
      display: "flex",
      justifyContent: [null, null, "center","center", "center"],
      mx: "auto",
      width: [null,null,"550px"],
      input: {
        borderColor: "gray",
        width: "400px",
        height: "50px",
        borderRadius: "25px",
        "&:focus": {
          borderColor: "primary",
          boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
          outline: "none",
        },
      },
    },
  },
};
