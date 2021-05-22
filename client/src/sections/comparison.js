/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import { keyframes } from "@emotion/core";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import PriceCard from "components/price-card";
import ButtonGroup from "components/button-group";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

const packages = {
  hourly: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trail",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Compare Prices",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's Of Service Providers",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Customer Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: "Personal Optimization and Prediction",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "$15",
      buttonText: "Create account",
      anotherOption: "Or Start 14 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Compare Prices",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's Of Service Providers",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Customer Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Personal Optimization and Prediction",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "For pro level developers",
      priceWithUnit: "$24",
      buttonText: "Create account",
      anotherOption: "Or Start 14 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Compare Prices",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's Of Service Providers",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Customer Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Personal Optimization and Prediction ",
          isAvailable: true,
        },
      ],
    },
  ],
  monthly: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trail",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Compare Prices",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's Of Service Providers",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Customer Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: "Personal Optimization and Prediction ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "$25",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Personal Optimization and Prediction ",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Customer Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Compare Prices",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's Of Service Providers ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "For pro level developers",
      priceWithUnit: "$39",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Personal Optimization and Prediction ",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Customer Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Compare Prices",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's Of Service Providers ",
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { hourly, monthly } = packages;
  const [state, setState] = useState({
    active: "hourly",
    pricingPlan: hourly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === "monthly") {
      setState({
        active: "monthly",
        pricingPlan: monthly,
      });
    } else {
      setState({
        active: "hourly",
        pricingPlan: hourly,
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <section id="pricing" sx={styles.comparisonPage}>
      <Container>
        <SectionHeader slogan="Our Pricing" title="Choose your pricing plan" />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === "hourly" ? "active" : ""}
              type="button"
              arai-label="hourly"
              onClick={() => handlePricingPlan("hourly")}
            >
              Hourly Plan
            </button>
            <button
              className={state.active === "monthly" ? "active" : ""}
              type="button"
              arai-label="Annual"
              onClick={() => handlePricingPlan("monthly")}
            >
              Monthly Plan
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  comparisonPage: {
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
  pricingWrapper: {
    mb: "-40px",
    mt: "-40px",
    mx: -3,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      ".package__price": {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    ".carousel-container": {
      width: "100%",
      "> ul > li ": {
        display: "flex",
      },
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 auto",
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2,
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#000000",
    button: {
      border: 0,
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
